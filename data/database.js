const mongodb = require('mongodb');
const uri = "mongodb+srv://dhruvjain657:0mEYWs2iuxrSCpim@cluster0.bfryinm.mongodb.net/test2?retryWrites=true&w=majority";

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {

    try{
        const client = await MongoClient.connect(uri);
        database = await client.db('online-shop').command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.log(err);
    }

}

function getDb() {
    if(!database) 
    {
        throw new Error('You must connect first!');
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}