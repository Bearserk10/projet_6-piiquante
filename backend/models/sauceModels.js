const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');


const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    heat: { type: Number },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: [{ type: String }],
    usersDisliked: [{ type: String }],
});

sauceSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Sauce', sauceSchema);
