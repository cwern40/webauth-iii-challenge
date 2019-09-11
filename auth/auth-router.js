const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('./generateToken')

const Users = require('../users/users-model');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            const token = generateToken(saved);
            res.status(201).json({saved, token});
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `You are logged in`,
                    token
                })
            } else {
                res.status(401).json({
                    message: 'You shall not pass!'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;