const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.get('token');

    jwt.verify(token, 'secret', ( err, decoded ) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }
        req.usuario = decoded.usuario;
        next();
    });
};

module.exports = {
    verificarToken
}