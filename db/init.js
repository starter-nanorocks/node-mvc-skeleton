const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test_db_nano", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("You are connected!!!!");
  })
  .catch((err) => {
    console.log("Invalid login to MongoDB");
  });

module.exports = mongoose;