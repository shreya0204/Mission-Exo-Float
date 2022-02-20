const launchesRouter = require('./launches.router');
const {getAllLaunches, addNewLauch} = require('../../models/launches.model');


// Array.from changing the launches object in the format of json to sen it to api tat can be used in the frontend application.
function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res){
    const launch = req.body; 
    try {
        if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
            return res.status(400).json({
                message : 'Missing required property'
            })
        }
        launch.launchDate = new Date(launch.launchDate);
        if(launch.launchDate.toString()==='Invalid Date'){
            return res.status(400).json({
                message : 'Invalid launch date'
            })
        }
        addNewLauch(launch);
        return res.status(201).json({
            data : launch
        }) 
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }

}

module.exports = {httpGetAllLaunches, httpAddNewLaunch};