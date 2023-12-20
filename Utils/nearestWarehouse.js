const { default: axios } = require('axios');
const geolib = require('geolib');

async function findNearestWarehouse(orderPincode, warehousePincodes) {
    const orderCoords = await getCoordinatesForPincode(orderPincode);

    let nearestWarehouse = null;
    let minDistance = Infinity;

    // Use Promise.all to wait for all asynchronous tasks to complete
    await Promise.all(warehousePincodes.map(async (warehousePincode) => {
        const warehouseCoords = await getCoordinatesForPincode(warehousePincode);

        const distance = geolib.getPreciseDistance(orderCoords, warehouseCoords);
        // distance is in kilometers
        console.log(`Distance between ${orderPincode} and ${warehousePincode} is ${distance / 1000} km`);

        if (distance < minDistance) {
            minDistance = distance;
            nearestWarehouse = warehousePincode;
        }
    }));

    return nearestWarehouse;
}

async function getCoordinatesForPincode(pincode) {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${pincode}`);
        
        if (response.data && response.data.length > 0) {
            const result = response.data[0];
            return {
                latitude: parseFloat(result.lat),
                longitude: parseFloat(result.lon),
            };
        } else {
            throw new Error('No coordinates found for the given pincode');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
}

// Ensure the top-level function is asynchronous
// (async () => {
//     const warehouse = await findNearestWarehouse(387002, [362001, 390002, 110005]);
//     console.log(warehouse);
// })();

module.exports = {
    findNearestWarehouse
};
