const {MongoClient} =require('mongodb');
const url='mongodb+srv://temp:temp@cluster0.kjidb5f.mongodb.net/?retryWrites=true&w=majority';
const database='e-comm';
const client=new MongoClient(url);
async function getData(){
 let result=await client.connect();
 let db=result.db(database);
 let collection=db.collection('users');
 let response=await collection.find({}).toArray();
 console.log(response);
}
getData();