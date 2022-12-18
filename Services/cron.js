var cron = require('node-cron');
const { videoFetch } = require('./youtube');
const dbServices = require('./database');

// running a cron job of calling the youtube fetch api on a regular intervals of 1 min.
cron.schedule('* * * * *', async () => {
    console.log('checking for latest videos every minute');

    // Calling the API every minute
    const response = await videoFetch();
    // console.log(response.length);

    // storing the fetched videos in database
    response.forEach(element => {
        try {
            dbServices.insertService(element)
        } catch (error) {
         console.log(error);   
        }
    });
});
