const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    try {
        const token = req.header('x-token');

        if (!token) {
            return res.status(401).json({
                ok: false,
                message: 'Token is required'
            });
        }

        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid; // Adding uid to request

        next();

    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token is not valid'
        });
    }
};

module.exports = {
    verifyJWT
}