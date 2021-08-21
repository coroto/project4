const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const db = require('../database');
const { render } = require('ejs');
const { result } = require('../database');
const{redirectToHome} = require("../middleware")


router.get("/",redirectToHome, (req, res) => {
    res.render('login', {
        title: "login",
        message: req.query.message
  //      sesionactive : false
    })
  });

router.post("/", (req, res) => {
    console.log("email: " + req.body.email)
    console.log("password: " + req.body.password)

    db.oneOrNone("SELECT * FROM users WHERE email = $1;", [req.body.email.toLowerCase()])
    .then((result) => {
        
        if (!result) {
            res.redirect("/login?message=Email not found")
        } else {
            const hash = result.password
				bcrypt.compare(req.body.password, hash, function (err, bcryptResult) {
					if (bcryptResult) {
                        req.session.firstname = result.firstname
						req.session.userId = result.id
						res.redirect("home")
                        //res.redirect(`/home?firstname=${result.firstname}`)
                    }else {
						// the password does not match, send back
						res.redirect("/login?message=Incorrect password")
					}
                })  
        }
    })
    .catch((err) => {
        res.redirect(`/login?message=${err}`)
    })
 
});

  module.exports = router;