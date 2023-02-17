const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()
var PORT = 3000;

app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render("index.ejs",{title:"Index"})
  })

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});