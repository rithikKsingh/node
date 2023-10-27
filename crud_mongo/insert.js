const dbConnect = require('./mongodb');

const insertData = async () => {
  const db=await dbConnect();
  const result=await db.insertMany(
    [{"name":"Rohan Dee","email":"rohan@abc.com","age":{"$numberInt":"25"},"hobbies":["oops","painting","soccer"]},
    {"name":"Rohan Dee","email":"rohan@abc.com","age":{"$numberInt":"25"},"hobbies":["oops","painting","soccer"]}

    ]
  );
  if(result.acknowledged){
    console.log("data inserted");
  }
  else {
    console.log("not inserted");
  }
}

insertData();
