import express from "express";
import { createUser,getUsers ,getUser,deleteUser,updateUser} from "../controllers/users.js";

const router=express.Router();

// const users=[
//     {
//         fName:"John",
//         lName:"Doe",
//         age:24
//     },
//     {
//         fName:"Jane",
//         lName:"Rain",
//         age:23
//     }
// ]

router.get('/',getUsers);

router.post('/',createUser);

router.get('/:userId',getUser);

router.delete('/:userId',deleteUser);

router.patch('/:userId',updateUser);
export default router;