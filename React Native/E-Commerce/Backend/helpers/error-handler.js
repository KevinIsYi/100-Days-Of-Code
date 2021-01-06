const errorHandler = ((err, req, res, next) => {
    if (err) {
        const { name } = err;
        if (name === 'UnauthorizedError') {
            return res.status(401).json({
                ok: false,
                message: "Unauthorized"
            });
        }
        if (name === 'ValidationError') {
            return res.status(401).json({
                ok: false,
                message: err
            });
        }

        return res.status(500).json({
            ok: false,
            message: 'Server has failed'
        });
    }
    next();
});

module.exports = {
    errorHandler
};