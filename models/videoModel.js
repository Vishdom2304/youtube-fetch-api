const mongoose = require('mongoose');

// defining the schema schema for saving the data fetched from the api.
var videoSchema = new mongoose.Schema({
    videoId: { type: String },
    videoTitle: { type: String, index: true },
    publishedAt: { type: Date },
    videoDescription: { type: String, index: true },
    thumbnailUrl: { type: Object },
    channelId: { type: String },
    channelTitle: { type: String }
}, { collection: 'youtubeVideos' });


// creating title and description of video as indexes for faster search
videoSchema.index({ title: 'text', description: 'text', tags: 'text' });
const Vdo = mongoose.model('Videos', videoSchema);
Vdo.createIndexes();  