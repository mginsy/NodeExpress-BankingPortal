const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()
var PORT = 3000;

app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

const accountData = fs.readFileSync(path.join(__dirname,"json","accounts.json"), "utf8")
const accounts = JSON.parse(accountData)
const userData = fs.readFileSync(path.join(__dirname,"json","users.json"), "utf8")
const users = JSON.parse(userData)

app.get('/', (req, res) => {
    res.render("index",{title:"Account Summary", accounts:accounts})
})

app.get('/savings', (req, res) => {
    res.render("account",{account: accounts.savings})
})

app.get('/checking', (req, res) => {
    res.render("account",{account: accounts.checking})
})

app.get('/credit', (req, res) => {
    res.render("account",{account: accounts.credit})
})

app.get('/profile', (req, res) => {
    res.render("profile",{user:users[0]})
})

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});