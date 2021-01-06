const { Router } = require('express');
const User = require('../model/usersSchema');
const jwt = require('jsonwebtoken');

const router = Router();

router.get('/user', async (req, res) => {
    try {
        const userList = await User.find().select('name phone email');

        res.json({
            ok: true,
            userList
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        const { params:{ id } } = req;
        const user = await User.findById(id).select('-passwordHash');

        if (!user) {
            return res.status(404).json({
                ok: false,
                message: "User doesn't not exist"
            });
        }

        res.json({
            ok: true,
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
});

router.post('/user', async (req, res) => {
    try {
        const { body } = req;
        const user = new User(body);

        user.save();

        res.status(201).json({
            ok: true,
            message: "User has been created"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.post('/user/login', async (req, res) => {
    
    try {
        const { body:{ email, password } } = req;
        const user = await User.findOne({ email });

        if (!user|| password !== user.passwordHash) {
            return res.status(404).json({
                ok: false,
                message: "User doesn't exist"
            });
        }

        const token = jwt.sign({
                userId: user.id,
                isAdmin: user.isAdmin
            }, 
            process.env.SECRET,
            {
                expiresIn: '1d',
            }
        );
        res.json({
            ok: true,
            token,
            user
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
    
});

router.post('/user/register', async(req, res) => {
    try {
        const { body } = req;
        const user = new User(body);

        await user.save();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.get('/users/get/count', async (req, res) => {
    try {
        const usersCount = await User.countDocuments((count) => count);
        res.json({
            ok: true,
            usersCount
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const { params:{ id } } = req;
        const deleteUser = await Product.findByIdAndDelete(id);

        if (!deleteUser) {
            return res.status(404).json({
                ok: false,
                message: "User doesn't exist"
            });
        }
        res.json({
            ok: true,
            message: 'User was deleted'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

module.exports = router;