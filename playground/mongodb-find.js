
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected Successfully');
    const db = client.db('TodoApp');

    //Fetching

    db.collection('Users').find({completed: false}).toArray().then((docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log("Unable to fetch todos", err);

    });

    // client.close();
} );
