const Message = require('../models/message');

const getChat = async (req, res) => {

    try {
        const { uid, params } = req;
        const { from } = params;
        
        const last30 = await Message.find({
            $or: [
                {
                    from: uid,
                    to: from
                },
                {
                    from: from,
                    to: uid
                }
            ]
        }).sort({
            createdAt: 'asc'
        }).limit(30);

        res.json({
            ok: true,
            messages: last30
        })
    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    getChat
}