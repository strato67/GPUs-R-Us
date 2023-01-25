const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {

    userNewUrlParser:true,
    useUnifiedTopology:true,
});

var _db;

module.exports = {

    connectToServer: (callback) =>{

        client.connect((err,db)=>{})


    }



};