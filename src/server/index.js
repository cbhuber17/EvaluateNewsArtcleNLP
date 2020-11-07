// https://www.npmjs.com/package/dotenv
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
// Point to the .env file from this server file
const dotenv = require('dotenv');

// Path for dev
// dotenv.config({ path: '../../.env' });

// Path for prod
dotenv.config();

const API_KEY = process.env.API_KEY;

// Path information - https://nodejs.org/api/path.html 
// The path module provides utilities for working with file and directory paths (comes built in with NodeJs).
const path = require('path');

// Express server
const express = require('express');
const app = express();
app.use(express.static('dist'));

// Body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS for web communication
const cors = require('cors');
app.use(cors());

// Apparently fetch is not defined in NodeJS; it must be installed via npm so the local server can use it
const fetch = require('node-fetch');

// Upon entry of the main page, have the server serve it (based on the '/' input)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// Port to use - webpack dev server will be using 8080, so this server should use 8081 for express/production
const port = process.env.PORT || `8081`;

// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Server has started on port number: ${port}!`);
})

// POST route for the server
app.post('/api', getAPI);

/*
* Async function that does the external API call to meaningcloud.com
* @param {Object} req - request (URL to analyze)
* @param {Object} res - response (returns the API data as an object)
*/
async function getAPI(req, res) {

    const urlToAnalyze = req.body.formText;

    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${urlToAnalyze}&lang=auto`;

    const apiResult = await fetch(url);

    try {
        const apiData = await apiResult.json();

        console.log(apiData);
        res.send(apiData);
    }
    catch (error) {
        console.log('ERROR: Could not get apiData in getAPI().  Msg: ' + error);
        alert(`ERROR: Could not get API data. Please try again later.`);
    }
}