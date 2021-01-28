const express = require('express');
const axios = require('axios')
const router = express.Router();
const url = 'http://newsapi.org/v2/top-headlines?country=ph&apiKey=be534b0041074734a8464fcd944398dd';

const rad ='https://raddy.co.uk/wp-json/wp/v2/posts/'
const time = ()=>{
    return Date.now().toLocaleString()
}
router.get('/', async(req,res)=>{
    try{
        
        const newsAPI = await axios.get(url)
        newsAPI.data.articles.shift()
        res.render('news',{articles : newsAPI.data.articles, date: setInterval(time,1000)})
    }catch(e){
        if(e.response)console.log(e.response)
        else if(e.request)console.log(e.request)
        else console.log(e.message)
    }


})

router.get('/nba', (req,res)=>{
res.render('nba')
    
})



module.exports = router