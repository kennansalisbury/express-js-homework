const EXPRESS = require('express')
const LAYOUTS = require('express-ejs-layouts')

const APP = EXPRESS()

//Setting and middleware
APP.set('view engine', 'ejs')
APP.use(LAYOUTS)
APP.use('/', EXPRESS.static('static'))

//set up body parser - use this when you have forms/posts
APP.use(EXPRESS.urlencoded({ extended: false }))

//HOME ROUTE
APP.get('/', (req, res) => {
    //homepage that includes some instructions for the user, 
    //and a form that includes a text input and a submit button. 
    //The text input should query for a zipcode, 
    //and the form should then—as a get method—send the zipcode to 
    //your backend for use. 
    //This route should take both GET methods.
})


APP.listen(3000)