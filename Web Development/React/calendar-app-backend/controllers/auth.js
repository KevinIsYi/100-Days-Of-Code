const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = ( req, resp = response) => {

    const { name, email, password } = req.body;

    // Errors
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    resp.status(201).json({
        ok: true,
        name,
        email,
        password
    });
}

const loginUser = ( req, resp = response ) => {

    const { email, password } = req.body;
    const errors = validationResult(req);

    if ( !errors.isEmpty() ) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

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