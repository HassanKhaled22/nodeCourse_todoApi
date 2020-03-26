const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to conect the database',err)
    }
    console.log('conect to the database');
    const db=client.db('TodoApp');

    // db.collection('todos').find({completed:true}).toArray().then((docs)=>{
    //     console.log('fetching the data')
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch the data'. err);
    // })
    db.collection('users').find({name:'hassan'}).toArray().then((docs)=>{
        console.log('fetching the data')
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('unable to fetch the data'. err);
    })

    client.close();
})