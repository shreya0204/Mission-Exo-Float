const express = require('express');
const {httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch} = require('./launches.controller');
const launchesRouter = express.Router();

launchesRouter
    .get('/', httpGetAllLaunches)
    .post('/',httpAddNewLaunch)
    .delete('/:id', httpAbortLaunch);

module.exports = launchesRouter; 