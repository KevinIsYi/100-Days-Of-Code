/*
    host/api/route
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, login, renewToken } = require("../controllers/auth");
const { validateErrors } = require('../middlewares/validate-errors');

const router = Router();

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required').notEmpty(),
        validateErrors
    ],
    login
);

router.post(
    '/new',
    [
        check('name', 'Name is required').notEmpty(),
        check('password', 'Password is required').notEmpty(),
        check('email', 'Email is required').isEmail(),
        validateErrors
    ],
    createUser
);

router.get('/renew', renewToken);

module.exports = router;