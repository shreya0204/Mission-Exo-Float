// Theory
// Pipe connecting here the readable stream to a writeable stream.
/* The best habitable planet is that which matches the flux where flux is the measure of amount of light or energy it gets from it's sun
The planet should not get about more than 1.11 times the amount of light our earth get and not less than 0.36 times.
*/
// import path  from "path";
const path = require('path')
const {parse} = require('csv-parse')
// import { parse } from "csv-parse";
const {createReadStream} = require('fs');
// import { createReadStream } from "fs";

const habitablePlanets = [];

const IshabitablePlanets = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

// promise is implemented because javascript will put it in async function and export it to calling function which we don't want as we have want this function to comeplete first. tat's why wer are making a promise that it will execute fully first then export itself.

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (IshabitablePlanets(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        resolve();
      });
  });
}

function getAllPlanets(){
  return habitablePlanets;
}

module.exports = { loadPlanetsData, getAllPlanets };
