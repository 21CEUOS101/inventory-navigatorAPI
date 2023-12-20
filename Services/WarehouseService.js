const Axios = require('axios');
const url = require('./index');


// const getWarehouseById = async (id) => {

//     const data = await Axios.get(`${url}/api/warehouse/${id}`).then((response) => {
//         return response.data;
//     });
    
//     return data;
// }

const getWarehouses = async () => {
        
    const data = await Axios.get(`${url}/api/warehouses`).then((response) => {
        return response.data;
    });
    
    return data;
}

// const createWarehouse = async (warehouse) => {
        
//     const data = await Axios.post(`${url}/api/warehouse`, warehouse).then((response) => {
//         return response.data;
//     });
    
//     return data;
// }

// const updateWarehouse = async (id , warehouse) => {
            
//     const data = await Axios.put(`${url}/api/warehouse/${id}`, warehouse).then((response) => {
//         return response.data;
//     });
    
//     return data;
// }

// const deleteWarehouse = async (id) => {

//     const data = await Axios.delete(`${url}/api/warehouse/${id}`).then((response) => {
//         return response.data;
//     });
    
//     return data;
// }

// module.exports = {
//     getWarehouseById,
//     getWarehouses,
//     createWarehouse,
//     updateWarehouse,
//     deleteWarehouse
// };

module.exports = {
    getWarehouses
};