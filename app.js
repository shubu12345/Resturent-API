require('dotenv').config();
const express = require('express');
const app = express();
port = process.env.PORT || 3000;
const item_routes = require('./routes/items')
const connecDB = require('./db/connect')

app.get("/", (req, res) => {
    res.send("Hi, I am live");
});

app.use('/api/items', item_routes);

const start = async() => {
    try{
        await connecDB(process.env.MONGODB_URL);
        app.listen(port, (req, res) => {
            console.log("server running at port: ",port);
        })

    }catch(error){
        console.log(error);
    }
}

start()