const EXPRESS = require('express')
const LAYOUTS = require('express-ejs-layouts')
weather = require('weather-js');

const APP = EXPRESS()

//Setting and middleware
APP.set('view engine', 'ejs')
APP.use(LAYOUTS)
APP.use('/', EXPRESS.static('static'))

//set up body parser - use this when you have forms/posts
APP.use(EXPRESS.urlencoded({ extended: false }))

//HOME GET ROUTE - /
APP.get('/', (req, res) => {
    //homepage that includes some instructions for the user, 
    //and a form that includes a text input and a submit button. 
    //The text input should query for a zipcode, 
    //and the form should then—as a get method—send the zipcode to 
    //your backend for use. 
    //This route should take both GET methods.
    res.render('home')
})

//WEATHER GET ROUTE - /weather
APP.get('/weather', (req, res) => {
    //a GET route that returns the weather data for whichever zipcode 
    //the user passes to route, you will need to access the zipcode 
    //from the form; this is a results page that displays the weather in 
    //the location given by the user. Display whichever data points 
    //from your Weather-JS call that you find relevant/interesting.
    // let zipcode = req.query.zipcode

    weather.find({search: req.query.zipcode , degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        // let notice = JSON.stringify(result, null, 2)
        // console.log(notice[0])
        res.send(result[0])
      })

})


APP.listen(3000)