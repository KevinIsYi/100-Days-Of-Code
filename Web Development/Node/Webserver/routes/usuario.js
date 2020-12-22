const { Router } = require('express');
const router = Router();
const Usuario = require('../models/usuario');

router.get('/usuario', (req, res) => {
    res.json({
        ok: true,
        lugar: 'get'
    })
});

router.post('/usuario', async (req, res) => {
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

router.put('/usuario/:id', (req, res) => {

    const { id } = req.params;
    console.log(id);

    res.json({
        ok: true,
        lugar: 'put'
    })
});

router.delete('/usuario', (req, res) => {
    res.json({
        ok: true,
        lugar: 'delete'
    })
});

module.exports = router;