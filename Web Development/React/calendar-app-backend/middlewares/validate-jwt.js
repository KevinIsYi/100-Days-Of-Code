const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, resp = response, next) => {
    const token = req.header('x-token');
    
    if (!token) {
        return resp.status(401).json({
            ok: false,
            message: 'Need Token'
        });
    }

    try {
        const { uid, name } = jwt.verify(
            token,
            process.env.JWT_SEED
        );

        req.uid = uid;
        req.name = name;

    } catch (e) {
        resp.status(401).json({
            ok: false,
            message: 'Token is not valid'
        });
    }

    next();
}

module.exports = {
    validateJWT
}