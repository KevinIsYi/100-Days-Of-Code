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
            createdAt: 'desc'
        }).limit(30);

        res.json({
            ok: true,
            messages: last30
        })
    } catch (error) {
        
    }

};

module.exports = {
    getChat
}