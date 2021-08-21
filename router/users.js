const express = require('express');
const router = express.Router();
const db = require('../database')
const{redirectToLogin} = require("../middleware")

// query information of specific user
router.get('/:id(\\d+)',redirectToLogin, async (req, res) => {
    const id = req.params.id;
    try {
      const userDB = await db.oneOrNone("SELECT * FROM users WHERE id = $1;", [id])
      const schedDB = await db.any("SELECT * FROM schedules WHERE id_user = $1", [id])
    
      if (userDB) {
        res.render('user', {user: userDB, userSchedules: schedDB})
    }else{
        res.render('error',{
        title: "Error",
        description: "No such user" 
      })
    }
      
    } catch (error) {
      res.render('error',{
        title: "Error",
        description: error
      })
    }
  });


  module.exports = router;
