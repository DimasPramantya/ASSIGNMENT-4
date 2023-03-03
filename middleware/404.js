const notFound = (req,res,next)=>{
    res.redirect("/404")
}

module.exports = notFound;