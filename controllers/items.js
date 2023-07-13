const { query } = require('express');
const Items = require('../model/item');


const getAllItems = async(req, res) => {
try{
const {hotel, name, sort, select} = req.query;
const queryObject = {}

if(hotel){
    queryObject.hotel = hotel;
}

if(name){
    queryObject.name = name;

}

let apiData = Items.find(queryObject);

//sorting function
if(sort){
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
}

//selection function
if(select){
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
}

let page = Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 3;

let skip = (page - 1) * limit;

apiData = apiData.skip(skip);

    const myFood = await apiData;
    res.status(200).json({myFood, nbHits: myFood.length});
}catch(error){
    console.log(error.message);
    res.status(500).json({message: error.message})
}
}


const getAllItemsTesting = async(req, res) => {
    try{
        const myFood = await Items.find(req.query);
        res.status(200).json({myFood});
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
    }


    module.exports = { getAllItems, getAllItemsTesting };