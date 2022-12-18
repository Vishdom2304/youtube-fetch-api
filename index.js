// import the required files and modules.

require('./models/db');
require('./Services/cron');
const express= require("express");
const dotenv =require("dotenv");
dotenv.config({path:'./.env'});
const bodyParser = require("body-parser");
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const videoRouter = require('./Routers/videoRoutes');

// using the video route for managing APIs.
app.use('/video', videoRouter);

app.listen(port, () => {
  console.log(`youtube fetch api listening on port ${port}`);
});

