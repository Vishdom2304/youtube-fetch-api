// controller.js - to direct the flow of apis.

const dbServices = require('../Services/database');

// get all stored videos from db in a paginated response.
const getAllVideos = async (req, res) => {
    try {
        const videos = await dbServices.findAllService(parseInt(req.query.page), parseInt(req.query.limit));
        return res.status(200).json(videos)
    } catch (error) {
        console.log(error);
        res.status(406).json(error)
    }
};

// Search a video from the stored videos using its title or description.
const getByTitle = async (req, res) => {
    try {
        const response = await dbServices.findByNameService(req.query.name, parseInt(req.query.page), parseInt(req.query.limit));
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(406).json(error)
    }
};

module.exports = {
    getAllVideos,
    getByTitle
}
