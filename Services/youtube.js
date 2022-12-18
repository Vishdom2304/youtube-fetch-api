// fetch data from youtube api

var { google } = require('googleapis');
const dotenv =require("dotenv");
dotenv.config({path:'./.env'});

// accessing the youtube api with the authorised API key.
var youtube = google.youtube({
    version: 'v3',
    auth: process.env.API_KEY
});

// Fetch videos from youtube in descending order of publishing date on a pre-defined query.
async function videoFetch() {
    try {
        const response = await youtube.search.list({
            part: 'snippet',
            q: 'latest songs',       // search query
            order: "date",              // order by date - latest first
            type: "video",
            publishedAfter: "2022-1-1T01:59:53Z",
            maxResults: 50            // max results per page
        });

        // returning the obtained response, in our case the fetched videos. 
        return response.data.items;
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = { videoFetch }