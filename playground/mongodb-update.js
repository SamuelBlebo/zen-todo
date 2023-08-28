
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//    Connecting
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected Successfully');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({_id: ObjectID("5f88faecce84d7767b879c88")
    // },{
    //     $set:
    //         {
    //             completed: true
    //         }
    // }, {
    //     returnOriginal : false
    // }).then((result) =>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID("5f88ffb8ce84d7767b879e05")
    },{
        $set:
            {
                name: "Samuel"

            },
        $inc:{
                age: -28
            }
    },{
        returnOriginal : false
    }).then((result)  => {
        console.log(result)
    });




    // client.close();
} );
