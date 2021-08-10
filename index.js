const express=require("express")
const app=express()

const PORT = process.env.PORT  || 3000

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//View engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// set 'public' folder as static folder
app.use(express.static(__dirname + '/public'))

//ROUTES
app.get("/", (req, res) => {
  res.render('index', {title: 'Mr Coffee'})
});



app.use((req, res, next) => {
  res.status(404).render('404', {
    title: "404",
    // description: "req.url"
    description: "Page not found "
  })
})

app.listen(PORT, () => {
    console.log(`App is listener at http://localhost:${PORT}`);
  });