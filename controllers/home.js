module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}

//since the getIndex function is part of an object that makes it a method
//this method was called by routes/home.js