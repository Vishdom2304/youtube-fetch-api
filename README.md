# Youtube Fetch API

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from
YouTube for a given tag/search query in a paginated response.


## Quick Start

### Configure

1. Install [Node.js and NPM](https://nodejs.org/en/)

2. Install packages:

    ```
    npm install
    ```
    
3. Install [MongoDB](https://www.mongodb.com/download-center/community)

### Run

1. Ensure [MongoDB](https://www.mongodb.com/) is running on `mongodb://localhost:27017` (or change the `MONGO_URI` line in `models/db.js` to point to your MongoDB server)

2. Use the example.env structure for setting up your crediantials and port

3. Start Server:

    ```
    nodemon index.js
    ```


## Server

* [Node.js](https://nodejs.org/en/)
    * Server platform
* [Express](https://expressjs.com/)
    * Web server

* [MongoDB](https://www.mongodb.com/)
    * Database server
* [Mongoose](https://mongoosejs.com/)
    * Server-side data models

## Development Tools

* [NPM](https://nodejs.org/en/)
    * Package manager and script runner
* [Nodemon](https://github.com/remy/nodemon)
    * Monitors and restarts node server when source changes
    

## Docker Image Creation

1. Get [Docker](https://docs.docker.com/desktop/install/windows-install/)
2. Run the application
3. Execute the following command in command prompt
    ```
    docker build "./" -t "<docker-image-name>"
    ```
4. Run the image from docker container or execute the following command in command prompt
   ```
   docker run -p 5000:5000 <docker-image-name>
   ```
## Key Features:- 

<ol>
<li> The API fetches latest videos sorted in reverse chronological order of their publishing date-time from YouTube
<li> Server calls the YouTube API continuously in background (async) with an interval of 1 min for fetching the latest videos for a predefined search query and stores the data of videos in a database.
<li> There's a GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.
<li> Also has a basic search API to search the stored videos using their title and description.
<li> The project is dockerized and optimised.
<li> Tried to optimise the search api, so that it's able to search videos containing partial match for the search query using regex.
<li> The fetching happen for a predefined query, in my case, Latest songs (has high frequency of video uploads).
<li> Properly explained the code using comments whereever possible.
<li> Used meaningful variable/function names, and maintained indentation and code style.
