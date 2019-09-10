const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send("We're up and running!")
});

module.exports = server;