const launchesRouter = require('./launches.router');
const {launches} = require('../../models/launches.model');


// Array.from changing the launches object in the format of json to sen it to api tat can be used in the frontend application.
function getAllLaunches(req, res){
    return res.status(200).json(Array.from(launches.values()));
}

module.exports = {getAllLaunches};