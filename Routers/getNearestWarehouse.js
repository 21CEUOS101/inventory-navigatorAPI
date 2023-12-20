// Desc: Router to get the nearest warehouse from the given pincode
const { findNearestWarehouse } = require("../Utils/nearestWarehouse");

const express = require("express")

const router = express.Router();

router.use(express.json());

router.get("/nearest-warehouse", async (req, res) => {
    try {
        const all_warehouses = req.body.warehouses;
        const pincode = req.body.pincode;
        const warehouse = await findNearestWarehouse(pincode, all_warehouses);
 
        res.json(warehouse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;