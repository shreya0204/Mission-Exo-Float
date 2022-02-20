const {getAllPlanets} = require('../../models/planets.model');

function httpGetAllPlanets(req, res){
    try {
        return res.status(200).json(getAllPlanets());
    } catch (error) {
        res.status(400).json({message : 'cannot get planets'})
    }
}


module.exports = {httpGetAllPlanets};