const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://hrithikpandey165:12hrithik@nodeexpressprojects.ughe0bd.mongodb.net/'

const connectDB = (url)=>{
    return mongoose.connect(url, {
        useCreateIndex:true, 
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true})
}

// connectDB(connectionString);

module.exports = connectDB;