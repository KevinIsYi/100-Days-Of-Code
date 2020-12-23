const { Router } = require('express');
const jwt = require('jsonwebtoken');

const router = Router();
const Usuario = require('../models/usuario');

router.post('/login', async (req, res) => {
    const { body } = req;

    try {
        const { email, password } = body
        const user = await Usuario.findOne({ email, password });

        if (!user) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El usuario o la contraseña no coinciden'
            });
        }

        const token = jwt.sign({
            user
        }, 'este-es-el-seed-de-desarrollo', {
            expiresIn: 60 * 60 // Segundos * minutos
        });

        return res.status(200).json({
            ok: true,
            mensaje: 'Bienvenido',
            token
        })

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            ok: false
        });
    }
});

module.exports = router;