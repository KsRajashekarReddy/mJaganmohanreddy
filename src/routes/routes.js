const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const nextcollection = require('../middleware/middleware')

router.get("/test-me" , function (req,res) {




    res.send("my first api")

})




router.get('/globalapi',nextcollection.newdata)
router.get('/api',nextcollection.data)
router.get('/newapi',nextcollection.ipMiddleware)



module.exports = router;