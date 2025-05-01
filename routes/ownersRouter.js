const express  = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");



//app.use(express.urlencoded({ extended: true }));
 
if(process.env.NODE_ENV === "development"){

    router.post("/create", async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res
        .status(504)
        .send("You dont's have permission to create a new owner.");
        }

 
        let { fullname, email, password } = req.body;





      let createdOwner = await ownerModel.create({
          fullname,
          email,
          password,
        });
        res.status(201).send(createdOwner);
    });
}


router.get("/admin", function (req, res) {
    let success = req.flash("success");
    res.render("createproducts", { success });
}); 




// console.log(process.env.NODE_ENV);




module.exports = router;