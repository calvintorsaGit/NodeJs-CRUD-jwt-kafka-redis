const express = require("express");
const {
    getJwtToken,
} = require("../controllers/AuthControllers");

const router = express.Router();

router.route("/").get(getJwtToken)

module.exports = router;
