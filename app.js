require("./db/init");
const path = require('path');
const express = require("express");
const CommentsController = require("./controllers/CommentsController");

const app = express();

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

// const comment = new Comment({
//     name: "New comment",
//     age: 22,
//     bio: "Short bio",
// })

// comment.save()
// .then(res => console.log(res))
// .catch(err => console.log(err))


// app.get("/", async (req, res) => {
//     try{
//         const comments = await Comment.find();
//         res.json(comments)
//     }catch(e){
//         res.json(e)
//     }
// })

// console.log(CommentsController);

app.get("/", CommentsController.getComments)

app.listen(4000, () => console.log("Browse to localhost:4000"));
