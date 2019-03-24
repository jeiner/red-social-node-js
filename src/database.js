const mongoose = require('mongoose');

const { database} = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlParse: true
})
    .then(db => console.log('DB is connect'))
    .catch(err => console.log(err));