import axios from 'axios'
var API_URL='http://172.16.34.108:8000';
async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
   const response= await axios.get(`${API_URL}/planets`);
   console.log(response.data);
   return await response.data.planets;
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};