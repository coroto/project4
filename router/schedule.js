const express = require('express');
const router = express.Router();
const db = require('../database')
const{redirectToLogin} = require("../middleware")

router.get('/', redirectToLogin, async(req,res) =>{
    try {
        const id = req.session.userId
        var empty = true
        const schedDB = await db.any("SELECT * FROM schedules WHERE id_user = $1", [id])
                
        schedDB [0] ? empty = false : empty = true

        console.log(`Schedules ${JSON.stringify(schedDB)}, esta vacio ${empty}`)
        
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

router.delete('/:id(\\d+)', async (req, res) =>{
    const id = req.params.id;
    try {
        const response = await db.none("DELETE FROM schedules WHERE id = $1;", [id])

        if (response){
            res.json({
                status: true,
                message: "Delete"
            })
        }else{
            res.json({
                status: False,
                message: "Error!"
            })
        }
    } catch (error) {
        res.render('error',{
            title: "Error",
            description: error
        })
    }
})



module.exports = router;