const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = mongoose.Schema({
fullname: {
    type: String,
    minLength: 3,
    trim: true,
},
emial: String ,
password: String ,
cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
},
],
// isadmin: Boolean,
orders: {
    type: Array,
    default:[]
},
contaSt: Number,
picture: String,
});

module.exports = mongoose.model("user", userSchema);