const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';

exports.getJwtToken = async (req, res) => {
        // generate an access token
        const accessToken = jwt.sign({}, accessTokenSecret, { expiresIn: '20m' });

        res.json({
            accessToken
        });
};

exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        });
    } else {
        res.status(401).json({message: "Auth failed"});
    }
}
