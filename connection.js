const mongoose = require('mongoose');

const config = require('./config');
// console.log(config);

mongoose.connect(config.db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('databse successfully connected'))
    .catch(err => console.error(err));


module.exports = mongoose;