const express  = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");


router.post("/create", upload.single("image"), async  function (req, res) {

try
 {let   { name,price,discount,bgcolour,panelcolour,textcolour} = req.body;


    let product = await productModel.create({

        image: req.file.bufer,
        name,
        price,
        discount,
        bgcolour,
        panelcolour,
        textcolour,
    });

    req.flash("success", "Product created successfuly.");
    res.redirect("owners/admin");
} catch(err) {
    res.send(err.message);
}
}); 


module.exports = router;