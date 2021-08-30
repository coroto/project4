const express=require("express")
const app=express()
require('dotenv').config() 
const morgan=require("morgan")
const chalk = require('chalk')
//import methodOverride from "method-override"
var methodOverride = require('method-override')

const PORT = process.env.PORT  || 3000

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//express session
const session = require("express-session")
//const threehours = 1000 * 60 * 60 * 3
const halfhour = 1000 * 60 * 30
app.use(
	session({
		name: "mrcoffee_sid",
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false /* Forces a session that is "uninitialized" to be saved to the store.  */,
		cookie: { maxAge: halfhour },
		resave: false /* Forces the session to be saved back to the session store, even if the session was never modified during the request. */,
	})
)

//morgan config
app.use(morgan('dev'))
app.use(methodOverride("_method"));
//View engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// set 'public' folder as static folder
app.use(express.static(__dirname + '/public'))

//ROUTES
app.use('/home', require('./router/home'))
app.use('/', require('./router/home'))

app.use('/signup', require('./router/signup'))
app.use('/login', require('./router/login'))
app.use('/logout', require('./router/logout'))
app.use('/users', require('./router/users'))
app.use('/schedule', require('./router/schedule'))


app.use((req, res, next) => {
  console.log(chalk.red.bgBlue('page not found'))
  res.status(404).render('404', {
    title: "404",
    // description: "req.url"
    description: "Page not found "
  })
})

app.listen(PORT, () => {
    console.log(`App is listener at http://localhost:${PORT}`);
  });