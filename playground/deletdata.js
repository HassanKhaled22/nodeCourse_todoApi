const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to conect the database',err)
    }
    console.log('conect to the database');
    const db=client.db('TodoApp');
// db.collection('todos').deleteMany({completed:true}).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log(`err${err}`);
// });
// db.collection('todos').deleteOne({completed:false}).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log(`err${err}`);
// });
// db.collection('todos').findOneAndDelete({completed:true}).then((res)=>{
//         console.log(res);
//     },(err)=>{
//         console.log(`err${err}`);
//     });



// db.collection('users').deleteMany({name:'hassan'}).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log(`err${err}`);
// });
// db.collection('users').deleteOne({name:'mm'}).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log(`err${err}`);
// });
db.collection('users').findOneAndDelete({name:'mm'}).then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(`err${err}`);
    });
    client.close();
})