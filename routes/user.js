const express = require("express");

const router = express.Router();

const {userList: users} = require('./admin');

router.get("/",(req,res,next)=>{
    console.log(users);
    res.render("user-list", {users});
})

module.exports = router;