// https://www.npmjs.com/package/dotenv
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
// Point to the .env file from this server file
const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });
// dotenv.config();
const API_KEY = process.env.API_KEY;

// TBD delete
console.log(API_KEY);

// Path information - https://nodejs.org/api/path.html 
// The path module provides utilities for working with file and directory paths (comes built in with NodeJs).
const path = require('path');

// Express server
const express = require('express');

const app = express();
app.use(express.static('dist'));
// app.use(express.static('../../dist'));
// app.use(express.static('../client')); TBD delete

const bodyParser = require('body-parser');

// TBD app.use(bodyParser.text()) ?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.text());

const cors = require('cors');
app.use(cors());

// Apparently fetch is not defined in NodeJS; it must be installed via npm
const fetch = require('node-fetch');

// TBD commented out code, sendFile to which index.html?
// Upon entry of the main page, have the server serve it
// TBD remove: The '/' will call as soon as the page loads, it's the root.
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('../client/views/index.html'));
})

// Port to use - webpack dev server will be using 8080, so this server should use 8081 for express/production
const port = `8081`;

// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Server has started on port number: ${port}!`);
})

// POST route for the server
app.post('/api', getAPI);

// TBD document function
async function getAPI(req, res) {

    urlToAnalyze = req.body.formText;

    // TBD check valid URL (urlToAnalyze) by regex (or do this prior to calling this function)

    url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${urlToAnalyze}&lang=auto`;
    console.log(url);
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