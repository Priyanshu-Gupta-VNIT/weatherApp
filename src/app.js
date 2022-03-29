const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const path = require('path')
const hbs = require('hbs')

// Public static path
const pathName = path.join(__dirname, "../public")
const template = path.join(__dirname,'../template/views')
const partials_path =  path.join(__dirname,'../template/partials')

app.set('view engine', 'hbs');
app.set('views',template)

hbs.registerPartials(partials_path)

app.use(express.static(pathName));

// Routing
app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/weather', (req,res)=>{
    res.render('weather')
})
app.get('*', (req,res)=>{
    res.render('error',{
        errorMsg: 'Opps! Page not Found'
    })
})

// Listening the app at the port-8000
app.listen(port,()=>{
    console.log(`Listening to the port at ${port}`);
})