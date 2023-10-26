const {MongoClient} =require('mongodb');
const url='mongodb+srv://temp:temp@cluster0.kjidb5f.mongodb.net/?retryWrites=true&w=majority';
const database='e-comm';
const client=new MongoClient(url);

async function dbConnect(){
    let result=await client.connect();
    let db=result.db(database);
    return db.collection('users');
}

module.exports=dbConnect;