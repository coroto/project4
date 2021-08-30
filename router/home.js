const express = require('express')
const router = express.Router()
const db = require('../database')
const{redirectToLogin} = require("../middleware")
const chalk = require('chalk')

//show table schedules of all user
router.get("/",redirectToLogin, async (req, res) => {
  try {
    const shchedulesDB = await db.any("SELECT  u.id, u.firstname, u.lastname, s.day, s.start_time, s.end_time FROM schedules as s  INNER JOIN users  as u on s.id_user = u.id");  
    console.log(chalk.greenBright(JSON.stringify(shchedulesDB)))
    res.render("home",{
      schedules: shchedulesDB,
      firstname: req.session.firstname
    });
    
  } catch (error) {
    res.render('error',{
      title: "Error",
      description: error
    })
  }
})

module.exports = router;