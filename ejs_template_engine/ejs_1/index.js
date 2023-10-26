const express=require('express');
const app=express();

app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const user={
        name:'Rithik',
        email:'rks@gmail.com'
    }
    res.render('profile',{user});
});

app.listen(3000);

