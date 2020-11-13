const { response } = require('express');

const createUser = ( req, resp = response) => {

    const { name, email, password } = req.body;

    resp.status(201).json({
        ok: true,
        name,
        email,
        password
    });
}

const loginUser = ( req, resp = response ) => {

    const { email, password } = req.body;

    resp.json({
        ok: true,
        email,
        password
    });
}
;
const renewToken = ( req, resp = response ) => {
    resp.json({
        ok: true,
        message: 'renew'
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken
};