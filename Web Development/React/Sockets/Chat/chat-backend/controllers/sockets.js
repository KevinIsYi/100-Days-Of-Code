const User = require('../models/user');

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

    console.log("Ya lo desconecté joeputa");

    return user;
}

module.exports = {
    connectUser,
    disconnectUser
}