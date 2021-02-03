const jwt = require('jsonwebtoken');

const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid }
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, (err, token) => {
                if (err) {
                    reject('Could not generate JWT');
                    console.log(err);
                }
                else {
                    resolve(token);
                }
            }
        );
    });
};

const getUIDFromToken = (token = '') => {
    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY);

        return {
            ok: true,
            uid
        }
    } catch (error) {
        return {
            ok: false,
            uid: null
        }
    }
}

module.exports = {
    generateJWT,
    getUIDFromToken
}