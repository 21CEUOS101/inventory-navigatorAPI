const { getWarehouses } = require("../Services/WarehouseService");
const { findNearestWarehouse } = require("../Utils/nearestWarehouse");

const express = require()

const router = express.Router();

router.use(express.json());

router.get("/nearest-warehouse", async (req, res) => {
    
    const all_warehouses = getWarehouses();

    const pincode = req.body.pincode;

    const warehouse = await findNearestWarehouse(pincode, all_warehouses);

    return warehouse;
})