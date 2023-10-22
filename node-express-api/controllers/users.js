import { v4 as uuidv4 } from 'uuid'; // generates usinque string every time

let users=[];

export const getUsers=(req,res)=>{
    console.log(users);
    res.send(users);
}

export const createUser=(req,res)=>{
    const user=req.body;
    const userId=uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const userWithId={...user,userId};
    users.push(userWithId);
    res.send(`User with the name ${user.fName} added!`);
    console.log('user added successfully');
}

export const getUser=(req,res)=>{
    const {userId}=req.params;
    const foundUser=users.find((user)=>user.userId===userId)
    res.send(foundUser);
}

export const deleteUser=(req,res)=>{
    const {userId}=req.params;
    users=users.filter((user)=>user.userId!==userId);
    res.send(`user with the id ${userId} deleted from the database.`)
}

export const updateUser=(req,res)=>{
    const {userId}=req.params;
    const {fName,lName,age}=req.body;
    const user=users.find((user)=>user.userId==userId);

    if(fName) user.fName=fName;
    if(lName) user.lName=lName;
    if(age) user.age=age;
    
    res.send(`User with the id : ${userId} has been updated.`);
}