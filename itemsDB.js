require('dotenv').config();
const connectDB = require('./db/connect');
const Items = require('./model/item');

const resturentJson = require('./items.json');



const start = async() => {
try{
 await connectDB(process.env.MONGODB_URL);
 await Items.create(resturentJson)
 await Items.deleteMany();
 console.log("sucessfully");
}catch(error){
    console.log(error);
}
}

start();