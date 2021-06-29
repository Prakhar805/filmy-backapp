const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    avatar: String,
    price: String,
    review: { type: mongoose.Types.ObjectId, ref: 'Reviews' },
    created: Date,
})


const model = mongoose.model('CrewMembers', schema);

module.exports = model;
