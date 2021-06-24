const mongoose = require("../../db/init");
const commentsSchema = require("./../comments/schema");
module.exports = mongoose.model("Comment", commentsSchema);