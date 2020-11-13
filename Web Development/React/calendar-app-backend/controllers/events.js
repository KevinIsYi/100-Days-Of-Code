const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, resp = response) => {
    const events = await Event.find().populate('user', 'name');

    resp.json({
        ok: true,
        events
    });
}

const createEvent = async (req, resp = response) => {
    
    const event = new Event(req.body);

    try {
        event.user = req.uid;
        const eventDB = await event.save();
        resp.json({
            ok: true,
            event: eventDB
        })
    } catch (e) {
        console.log(e);
        return resp.status(500).json({
            ok: false,
            message: 'Talk with the admin'
        })
    }

}

const updateEvent = async (req, resp = response) => {
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await Event.findById(eventId);
        if ( !event ) {
            return resp.status(404).json({
                ok: false,
                message: "IdEvent doesn't exist"
            });
        }
        if (event.user.toString() !== uid) {
            return resp.status(401).json({
                ok: false,
                message: 'User cannot edit this event'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });

        resp.json({
            ok: true.body,
            eventUpdated
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            message: 'Talk with admin'
        })
    }
}

const deleteEvent = async (req, resp = response) => {
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await Event.findById(eventId);
        if ( !event ) {
            return resp.status(404).json({
                ok: false,
                message: "IdEvent doesn't exist"
            });
        }
        if (event.user.toString() !== uid) {
            return resp.status(401).json({
                ok: false,
                message: 'User delete edit this event'
            });
        }

        await Event.findByIdAndDelete(eventId);

        resp.json({
            ok: true
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            message: 'Talk with admin'
        });
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}