const Comment = require("./model");

const data = [
    {
        name: "New comment 1",
        age: 21,
        bio: "Short bio",
    },
    {
        name: "New comment 2",
        age: 22,
        bio: "Short bio",
    },
    {
        name: "New comment 3",
        age: 23,
        bio: "Short bio",
    },
    {
        name: "New comment 4",
        age: 24,
        bio: "Short bio",
    },
    {
        name: "New comment 5",
        age: 25,
        bio: "Short bio",
    },
];

Comment.insertMany(data)
    .then((res) => {
        console.log("Data inserted for Comments"); // Success
    })
    .catch((err) => {
        console.log(err); // Failure
    });


module.exports = Comment;
