const users = require('../model/users.json');

const getUsers = (req, res) => {
    res.json(users)
}

module.exports = { getUsers };