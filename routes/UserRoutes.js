const express = require("express");
const {
    getAlluser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require("../controllers/UserControllers");

const router = express.Router();

router.route("/").get(getAlluser).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
