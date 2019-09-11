const router = require('express').Router()

const Users = require('./users-model');
const restricted = require('../auth/restricted');

router.get('/', restricted, (req, res) => {
    const { department } = req.decodedToken;


    Users.findBy({department: department})
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router;