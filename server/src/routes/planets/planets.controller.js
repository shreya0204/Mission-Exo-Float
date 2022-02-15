const planets = require('../../models/planets.model');

function getAllPlanets(req, res){
    try {
        return res.status(200).json(planets);
    } catch (error) {
        res.status(400).json({message : 'cannot get planets'})
    }
}


module.exports = {getAllPlanets};