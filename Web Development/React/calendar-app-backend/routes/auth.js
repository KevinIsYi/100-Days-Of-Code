/* User routes
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post(
    '/new', 
    [ 
        check('name', 'Name is not valid').not().isEmpty(),
        check('email', `Email is not valid`).isEmail(),
        check('password', 'Password must have at least 6 chars, at ').isLength({ min: 6 }),
        validateFields
    ], // Middlewares
    createUser
);

router.post(
    '/', 
    [
        check('email', 'Email is not valid').isEmail(),
        check('password', 'Password must have at least 6 chars, at ').isLength({ min: 6 }),
        validateFields
    ],
    loginUser
);

router.get('/renew', renewToken);

module.exports = router;