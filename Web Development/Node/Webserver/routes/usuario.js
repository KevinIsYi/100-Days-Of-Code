const { Router } = require('express');
const { verificarToken } = require('../middlewares/autenticacion');
const router = Router();
const Usuario = require('../models/usuario');

router.get('/usuario', (req, res) => {
    res.json({
        ok: true,
        lugar: 'get'
    })
});

router.post('/usuario', verificarToken, async (req, res) => {
    const { body:{ nombre, email, password, rol } } = req;
    
    const usuario = new Usuario({
        nombre,
        email,
        password,
        rol
    });

    try {
        await usuario.save();

        return res.status(201).json({
            ok: true,
            mensaje: 'Usuario guardado en DB'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: 'Falla al guardar en la base de datos'
        })
    }

});

router.put('/usuario/:id', async (req, res) => {

    const { params:{ id } } = req;
    const { body } = req;

    try {
        const user = await Usuario.findByIdAndUpdate(id, body, {
            new: true
        });
        console.log(user);
        return res.status(200).json({
            ok: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Fallo al acceder a DB'
        })
    }
});

router.delete('/usuario', (req, res) => {
    res.json({
        ok: true,
        lugar: 'delete'
    })
});

module.exports = router;