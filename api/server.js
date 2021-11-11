const express = require('express');
const server = express();
const hogwartsStaffRouter = require('./hogwarts-staff/hogwarts-staff-router');

server.use('/api/hogwarts-staff', hogwartsStaffRouter);
server.use(express.json());

module.exports = server;