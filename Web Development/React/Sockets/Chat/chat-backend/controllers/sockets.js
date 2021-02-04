const User = require('../models/user');
const Message = require('../models/message');

const connectUser = async (uid) => {
    const user = await User.findByIdAndUpdate(
        uid,
        {
            online: true
        },
        {
            new: true
        }
    );

    return user;
};

const disconnectUser = async (uid) => {
    const user = await User.findByIdAndUpdate(
        uid,
        {
            online: false
        },
        {
            new: true
        }
    );

    return user;
}

const getUsers = async () => {
    const users = await User.find().sort('-online');

    return users;
};

const saveMessage = async (message) => {
    try {
        const newMessage = new Message(message);
        await newMessage.save();

        return newMessage;

    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    connectUser,
    disconnectUser,
    getUsers,
    saveMessage
}