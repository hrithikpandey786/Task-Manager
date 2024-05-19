const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect.js')
const tasks = require('./routes/tasks.js');
const notFound = require('./middleware/not-found.js');
const port = process.env.PORT || 3000;

app.use(express.static('../Frontend/public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);

        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}...`);
        })
    } catch(error){
        console.log(error);
    }
}

start();