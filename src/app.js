const path = require('path')

const express = require('express')
const app =express()
const port = process.env.PORT || 3000
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const pubDir = path.join(__dirname, '../public')
const viewsDir =path.join(__dirname, '../templates/views' )
const partialDir = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialDir)
app.use(express.static(pubDir))

//root view
app.get('', (req, res)=>{
    res.render('index', {
        title:'Weather Service',
        name:'Tom Wu'
    })
})

//help view
app.get('/help', (req, res) => {
    res.render('help', {
        title:'Dynamic views from Help',
        name:'Tom Wu'
    })
})
//about view
app.get('/about',(req, res)=>{
    res.render('about', {
        title:'dynamic views from about',
        name: 'Tom Wu',
        about:'Just some stuff about stuff'
    })
} )

// weather page
app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send('you must provide address')
    }

    geocode(req.query.address, (error, data)=>{
        if (error){
            return res.send(error)
        }
        forecast(data.latitude, data.longitude, (error, forecastdata)=>{
            if (error) {
                return res.send(error)
            }
            res.send({forecast:forecastdata,
                        location:data.location,
                        address: req.query.address
            })
        })

    })
    
})


app.get('/help/*', (req, res) => {
    res.status(404)
    res.render('404page',{
        message:'Article not found!'
    })
})

app.get('*', (req, res)=>{
    res.status(404)
    res.render('404page', {
        message:'Page not found!'
    })
})

app.listen(port, ()=>{

    console.log('server started on port'+port)
    
})