
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//    Connecting
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected Successfully');
    const db = client.db('TodoApp');

    //Deleting

    //DeleteMany
    // db.collection('Todos').deleteMany({text: "Eat launch"}).then((result) => {
    //     console.log(result);
    // });

    //DeleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result)
    //
    // })

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    //
    // })


    // DeleteMany
    // db.collection('Users').deleteMany({name: "John"}).then((result) => {
    //     console.log(result);
    // });


    //findOneAndDelete

    db.collection('Users').findOneAndDelete({_id: ObjectID("5f88ff8dce84d7767b879df0")}).then((result) => {
        console.log(result);

    })





    // client.close();
} );
