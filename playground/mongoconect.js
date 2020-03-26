const {MongoClient,ObjectID}=require('mongodb');
let obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to conect the database',err)
    }
    console.log('conect to the database');
    const db=client.db('TodoApp');
    // db.collection('todos').insertOne({
    //      text:'so to do text',
    //      completed:false
    // },(err,res)=>{
    //     if(err){
    //       return  console.log('unable to insert document')
    //     }
    //     console.log(JSON.stringify(res.ops,undefined,2));
        
    // })

//     db.collection('users').insertOne({
//         name:'hassan',
//         age:20,
//         location:'egypt',

//    },(err,res)=>{
//        if(err){
//          return  console.log('unable to insert document')
//        }
//        console.log(JSON.stringify(res.ops,undefined,2));
//        console.log(res.ops[0]._id.getTimestamp())
       
//    })

    client.close();
})