const mongoose = require('mongoose');

const connectDB = (url)=>{
    return mongoose.connect(url, {
        useCreateIndex:true, 
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true})
}

// connectDB(connectionString);

module.exports = connectDB;