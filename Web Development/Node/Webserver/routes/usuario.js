const { Router } = require('express');
const router = Router();

router.get('/usuario', (req, res) => {
    res.json({
        ok: true,
        lugar: 'get'
    })
});

router.post('/usuario', (req, res) => {
    console.log(req);
    res.json({
        ok: true,
        lugar: 'post'
    })
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