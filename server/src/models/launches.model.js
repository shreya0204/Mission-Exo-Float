const launches = new Map();

let  lastestFlightNumber = 100;

const launch = {
    flightNumber : 100,
    mission : 'Kepler Exploration X',
    rocket : 'Explorer IS1',
    launchDate  : new Date('December 27 , 2030'),
    target : 'Kepler-442 b',
    customers : ['NASA', 'BSA'],
    upcoming : true,
    success : true
}

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLauch(launch){
    lastestFlightNumber++;
    launches.set(lastestFlightNumber, Object.assign(launch, {
        success : true,
        upcoming : true,
        customers : ['NASA','BSA'],
        flightNumber : lastestFlightNumber
    }));
}

module.exports = {getAllLaunches, addNewLauch};