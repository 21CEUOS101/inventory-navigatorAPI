const { default: axios } = require('axios');
const geolib = require('geolib');

async function findNearestPincode(pincode, pincodes) {
    const orderCoords = await getCoordinatesForPincode(pincode);

    let nearestPincode = null;
    let minDistance = Infinity;

    // Use Promise.all to wait for all asynchronous tasks to complete
    await Promise.all(pincodes.map(async (p) => {
        const warehouseCoords = await getCoordinatesForPincode(p);

        const distance = geolib.getPreciseDistance(orderCoords, warehouseCoords);

        // distance is in kilometers
        // console.log(`Distance between ${pincode} and ${p} is ${distance / 1000} km`);

        if (distance < minDistance) {
            minDistance = distance;
            nearestPincode = p;
        }
    }));

    return nearestPincode;
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
    findNearestPincode
};
