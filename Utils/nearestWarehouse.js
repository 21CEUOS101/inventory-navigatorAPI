// Importing the 'geolib' library for distance calculation
const geolib = require('geolib');

// Function to find the nearest warehouse
function findNearestWarehouse(orderPincode, warehousePincodes) {
    const orderCoords = getCoordinatesForPincode(orderPincode);

    let nearestWarehouse = null;
    let minDistance = Infinity;

    warehousePincodes.forEach((warehousePincode) => {
        const warehouseCoords = getCoordinatesForPincode(warehousePincode);
        const distance = geolib.getDistance(orderCoords, warehouseCoords);

        if (distance < minDistance) {
            minDistance = distance;
            nearestWarehouse = warehousePincode;
        }
    });

    return nearestWarehouse;
}

// Replace this function with your actual code to get coordinates for a given pin code
function getCoordinatesForPincode(pincode) {
    // Implement your logic to obtain coordinates for the given pin code
    // This might involve calling a geocoding API or using a database
    // For simplicity, return placeholder coordinates {latitude, longitude} for now
    return { latitude: 0, longitude: 0 };
}

// Example usage:
const orderPincode = "12345";
const warehousePincodes = ["54321", "67890", "98765"];

const nearestWarehouse = findNearestWarehouse(orderPincode, warehousePincodes);
console.log("Nearest Warehouse:", nearestWarehouse);

// export 
module.exports = {
    findNearestWarehouse
};