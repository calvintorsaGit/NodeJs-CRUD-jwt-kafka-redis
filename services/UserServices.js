const UserModel = require("../models/User");

exports.getAllUsers = async () => {
    return UserModel.find();
};

exports.createUsers = async (user) => {
    return UserModel.create(user);
};
exports.getUserById = async (id) => {
    return UserModel.findById(id);
};

exports.updateUser = async (id, user) => {
    return UserModel.findByIdAndUpdate(id, user);
};

exports.deleteUser = async (id) => {
    return UserModel.findByIdAndDelete(id);
};
