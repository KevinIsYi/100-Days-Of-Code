const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const login = async (req, res) => {
    const { body } = req;
    const { email, password } = body;

    try {
        const userDB = await User.findOne({ email });
        
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                message: "This email doesn't exist"
            })
        }
        const isValidPassword = bcryptjs.compareSync(password, userDB.password);

        if (!isValidPassword) {
            return res.status(404).json({
                ok: false,
                message: "Password is not correct"
            });
        }

        const token = await generateJWT(userDB.id);

        res.json({
            ok: true,
            user: userDB,
            token
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Talk with the admin'
        })
    }
};

const createUser = async (req, res) => {
    try {
        const { body } = req;
        const { email, password } = body;

        const emailExist = await User.findOne({ email });
        
        
        if (emailExist) {
            return res.status(400).json({
                ok: true,
                message: 'Email already exist'
            }); 
        }
        
        const user = new User(body);
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();
        const token = await generateJWT(user.id);

        res.json({
            ok: true,
            user,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({  
            ok: false,
            message: 'Talk with the admin'
        });
    }
};

const renewToken = async (req, res) => {

    const { uid } = req;

    try {
        const token = await generateJWT(uid);
        const user = await User.findById(uid);
    
        res.json({
            ok: true,
            user,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: true,
            message: 'Contact the admin'
        })
    }
};

module.exports = {
    login,
    createUser,
    renewToken
};