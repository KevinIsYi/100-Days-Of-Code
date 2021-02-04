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

    return user;
}

const getUsers = async (uid) => {
    const users = await User.find({ _id: { $ne: uid } }).sort('-online');

    return users;
};

module.exports = {
    connectUser,
    disconnectUser,
    getUsers
}