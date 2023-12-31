// Desc: Router to get the nearest warehouse from the given pincode
const { findNearestPincode } = require("../Utils/nearestWarehouse");
const { getDistance } = require("../Utils/getDistance");

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

router.post('/get-distance', async (req, res) => {
    try {
        const { source, destination } = req.body;
        const distance = await getDistance(source, destination);
        res.json({ distance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;