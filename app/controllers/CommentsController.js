const Comment = require("../models/comments/model");

exports.getComments = async (req, res) => {
    try{
        const comments = await Comment.find();
        // res.json(comments)
        // console.log(typeof comments);
        
        res.render('home', {
            comments:comments,
            title: "Home page"
        });
    }catch(e){
        res.json(e)
    }
};

