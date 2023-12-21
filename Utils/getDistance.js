const { default: axios } = require('axios');
const geolib = require('geolib');

async function getDistance(source, destination) {
    const source_coords = await getCoordinatesForPincode(source);
    const destination_coords = await getCoordinatesForPincode(destination);

    // distance is in meters
    const distance = await geolib.getPreciseDistance(source_coords, destination_coords);

    // distance is in kilometers
    return (distance / 1000);
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

module.exports = {
    getDistance
};
