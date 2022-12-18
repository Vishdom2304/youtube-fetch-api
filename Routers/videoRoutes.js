const express = require("express");
const router = express.Router();

const routeCtrl = require('../Controllers/controller');

/* An api to to get the videos stored in the database in a paginated response in reverse-chronological order.

example: http://localhost:5000/video/get?page=2&limit=5 */

router.get('/get', routeCtrl.getAllVideos);

/* A search api to find any video stored in the database by its title or description.

example: http://localhost:5000/video/title?name=launch&page=2&limit=1 */

router.get('/title', routeCtrl.getByTitle);


module.exports = router;
