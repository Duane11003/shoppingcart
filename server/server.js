const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
const shoppingController = require('./controllers/shoppingController')
const cookieParser = require('cookie-parser')


// global middleware
app.use(express.json())
// app.use('/', express.static(path.join(__dirname, '../app')))
app.use(cookieParser())
app.use(cors())
app.use(express.urlencoded({extended: true}))


// routes =======================================

app.get('/', shoppingController.getAllData)
app.post('/banana', shoppingController.addBanana, shoppingController.calculateBanana)
app.post('/durian', shoppingController.addDurian, shoppingController.calculateDurian)
app.post('/apple', shoppingController.addApple, shoppingController.calculateApple)
app.post('/cranberry', shoppingController.addCranberry, shoppingController.calculateCranberry)
app.delete('/', shoppingController.deleteData)






// server listening
app.listen(3000, function(){console.log('listening on port 3000!!!')})