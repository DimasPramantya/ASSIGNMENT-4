const express = require('express');

const router = express.Router();

const userList = [];

router.get("/add-user",(req,res,next)=>{
    res.render("add-user");
})

router.post('/add-user',(req,res,next)=>{
    const user = req.body.user;
    userList.push(user);
    console.log(userList);
    res.redirect(302,'/');
})

module.exports = {router, userList};