const redis = require("redis");
const UserService = require("../services/UserServices");

const client = redis.createClient();

exports.getAlluser = async (req, res) => {
    let results;
    let cache = false;
    client.get('all', async (err, cacheResults) => {
        try {
            if (cacheResults) {
                cache = true;
                results = JSON.parse(cacheResults);
            } else {
                results = await UserService.getAllUsers();
                await client.set('all', JSON.stringify(results));
            }
            res.json({ data: results, status: "success", cache });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })
};

exports.createUser = async (req, res) => {
    try {
        const user = await UserService.createUsers(req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await UserService.deleteUser(req.params.id);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
