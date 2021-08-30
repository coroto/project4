const express = require('express');
const router = express.Router();
const db = require('../database')
const{redirectToLogin} = require("../middleware")
const chalk = require('chalk')
var methodOverride = require('method-override')

router.use(methodOverride("_method"));

router.get('/', redirectToLogin, async(req,res) =>{
    try {
        const id = req.session.userId
        var empty = true
        const schedDB = await db.any("SELECT * FROM schedules WHERE id_user = $1", [id])
                
        schedDB [0] ? empty = false : empty = true

        console.log(chalk.red.bgBlue(`Schedules ${JSON.stringify(schedDB)}, esta vacio ${empty}`))
        
        res.render('schedule',{
            schedules: schedDB,
            empty: empty,
            firstname: req.session.firstname
            })
    } catch (error) {
        res.render('error',{
            title: "Error",
            description: error
        })
    }    
})

router.post('/', async(req, res)=>{  
    console.log(chalk.green('Insertando datos '+req.session.userId + req.body.day ))
    try {
       await db.none("INSERT INTO schedules (id, id_user, day, start_time, end_time) VALUES (DEFAULT,$1, $2, $3, $4);", [req.session.userId, req.body.day, req.body.start_time,req.body.end_time])
      res.redirect('/schedule')
  
    } catch (error) {
      res.render('error',{
        title: "Error",
        description: error
      })
    }
  })

router.delete('/:id(\\d+)', async (req, res) =>{
    const id = req.params.id *1;
    console.log(typeof id)
    try {
        const response = await db.none("DELETE FROM schedules WHERE id = $1;", [id])
        res.redirect('/schedule')
    } catch (error) {
        console.log("error al eliminar" + error)
        //res.redirect('/schedule')
            res.render('error',{
                title: "Error",
                description: error
            })
    }
})



module.exports = router;