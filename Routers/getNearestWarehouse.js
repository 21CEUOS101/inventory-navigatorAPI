const { getWarehouses } = require("../Services/WarehouseService");
const { findNearestWarehouse } = require("../Utils/nearestWarehouse");

const express = require("express")

const router = express.Router();

router.use(express.json());

router.get("/nearest-warehouse", async (req, res) => {
    try {
        const all_warehouses = await getWarehouses();
        const pincode = req.body.pincode;
        const warehouse = await findNearestWarehouse(pincode, all_warehouses);
 
        res.json(warehouse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;