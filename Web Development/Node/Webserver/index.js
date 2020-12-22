require('./config/config');
const express = require('express');
const app = express();

app.get('/usuario', (req, res) => {
    res.json({
        ok: true,
        lugar: 'get'
    })
});

app.post('/usuario', (req, res) => {
    console.log(req);
    res.json({
        ok: true,
        lugar: 'post'
    })
});

app.put('/usuario/:id', (req, res) => {

    const { id } = req.params;
    console.log(id);

    res.json({
        ok: true,
        lugar: 'put'
    })
});

app.delete('/usuario', (req, res) => {
    res.json({
        ok: true,
        lugar: 'delete'
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${ process.env.PORT }`);
});