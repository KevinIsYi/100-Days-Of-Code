const { response } = require('express');
const bcrypt = require('bcryptjs');

const { generateJWT } = require('../helpers/jwt');
const User = require('../models/Users');

const createUser = async ( req, resp = response) => {

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email }); // Returns null if it doesnt exist
        if (user) {
            return resp.status(400).json({
                ok: false,
                message: 'Email already exist'
            })
        }
        
        const salt = bcrypt.genSaltSync(); // Receives number of rounds, 10 default
        user = new User( req.body );
        user.password = bcrypt.hashSync( password, salt );
        await user.save();

        const token = await generateJWT(user.id, user.name);

        resp.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });

    } catch ( e ) {
        console.log(e);
        resp.status(500).json({
            ok: false,
            message: 'Talk with the admin to fix this error'
        });
    }    
}

const loginUser = async ( req, resp = response ) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }); // Returns null if it doesnt exist
        if ( !user ) {
            return resp.status(400).json({
                ok: false,
                message: "Email doesn't exist"
            });
        }

        // Check password
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
            return resp.status(400).json({
                ok: false,
                message: "Password doesn't match"
            });
        }

        const token = await generateJWT(user.id, user.name);

        resp.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });


    } catch (e) {
        console.log(e);
        resp.status(500).json({
            ok: false,
            message: 'Talk with the admin to fix this error'
        });
    }
}
;
const renewToken = async ( req, resp = response ) => {

    const { uid, name } = req;

    const token = await generateJWT(uid, name);

    resp.json({
        ok: true,
        uid,
        name, 
        token
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken
};