const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const server = express();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send("We're up and running!")
});

module.exports = server;