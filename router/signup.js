const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const db = require('../database')
const{redirectToHome} = require("../middleware")

router.get("/",redirectToHome, (req, res) => {
    res.render('signup', {title: 'Sign Up'})
  });

  router.post('/', async(req, res)=>{
    try {
      console.log(`entro post`)
      const usersDB = await db.oneOrNone("SELECT * FROM users WHERE email = $1;", [req.body.email.toLowerCase()])
        if (usersDB){
          console.log(`error 2 ${error}`)
          res.render('error',{
            title: "Error",
            description: "'User already exists, please use another email address.'"
          })
        }else{
          try {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt)
        
            await db.none("INSERT INTO users(firstname, lastname, email, password) VALUES($1, $2, $3, $4);", [req.body. firstname, req.body.lastname, req.body.email.toLowerCase(), hash])
            
           // res.redirect(`/home?firstname=${req.body.firstname}`)
           res.redirect("login")
          } catch (error) {
            console.log(`error 2 ${error}`)
            res.render('error',{
              title: "Error",
              description: error
            })
          }
        }
    } catch (error) {
      console.log(`error 3 ${error}`)
      res.render('error',{
        title: "Error",
        description: error
      })
    }
})


module.exports = router;