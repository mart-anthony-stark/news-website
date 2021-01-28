const express = require('express');

const app = express();

// STATIC FILES
app.use(express.static('public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))


// TEMPLATE ENGINE
app.set('view engine', 'ejs')

// ROUTES
app.use('/',require('./routes/news'))

const port = process.env.PORT || 3000
app.listen(port,(err)=>{
    if(err) console.log(err)
    else console.log("Listening to port " + port)
}) 