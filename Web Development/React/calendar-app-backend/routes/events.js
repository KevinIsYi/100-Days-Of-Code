/*
    host + /api/events 
*/

const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');

const router = Router();
router.use(validateJWT); // All routers below will validate token

router.get('/', getEvents);

router.post(
    '/', 
    [
    check('title', 'Title is needed').not().isEmpty(),
    check('start', 'Start Date is not valid').custom(isDate),
    check('end', 'End Date is not valid').custom(isDate),
    validateFields
    ], 
    createEvent
);

router.put(
    '/:id', 
    [
    check('title', 'Title is needed').not().isEmpty(),
    check('start', 'Start Date is not valid').custom(isDate),
    check('end', 'End Date is not valid').custom(isDate),
    validateFields
    ], 
    updateEvent
);

router.delete('/:id' , deleteEvent);

module.exports = router;