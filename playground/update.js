const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to conect the database',err)
    }
    console.log('conect to the database');
    const db=client.db('TodoApp');
db.collection('todos').findOneAndUpdate({_id:new ObjectID('5e7c611a151f59837d44d9bd')},{


$set:{
    completed:true
}} ,{ returnOriginal:false}
).then((res)=>{
console.log(res)
})

db.collection('users').findOneAndUpdate({name:'mo'},{
    $set:{
        name:'hassan'
    }},{
        returnOriginal:false
    }
).then((res)=>{
    console.log(res);
})

    client.close();
})