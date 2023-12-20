// Desc: Router to get the nearest warehouse from the given pincode
const { findNearestPincode } = require("../Utils/nearestWarehouse");

const express = require("express")

const router = express.Router();

router.use(express.json());

router.post("/find-nearest", async (req, res) => {
    try {
        const all_pincodes = req.body.pincodes;
        const pincode = req.body.pincode;
        const n_pincode = await findNearestPincode(pincode, all_pincodes);
 
        res.json({ nearest_pincode: n_pincode });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;