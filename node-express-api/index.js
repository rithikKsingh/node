import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app=express();
const port=3000;

app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res)=>{
res.send('Hello from Homepage')
})

app.listen(port,()=>console.log(`Server running on port : http://localhost:${port}`));