const fs = require("fs")
const path = require("path")
const express = require("express")
const router = express.Router()

const {accounts, writeJSON} = require("../data")

router.get('/transfer', (req, res) => {
    res.render("transfer")
})

router.post('/transfer', (req, res) => {
    let newBalanceFrom = accounts[req.body.from].balance - parseInt(req.body.amount)
    accounts[req.body.from].balance = newBalanceFrom
    let newBalanceTo = accounts[req.body.to].balance + parseInt(req.body.amount)
    accounts[req.body.to].balance = newBalanceTo

    writeJSON()
    res.render("transfer",{message:"Transfer Completed"})
})

router.get('/payment', (req, res) => {
    res.render("payment",{account: accounts.credit})
})

router.post('/payment', (req, res) => {
    accounts.credit.balance = parseInt(accounts.credit.balance) - parseInt(req.body.amount)
    accounts.credit.available = parseInt(req.body.amount) + parseInt(accounts.credit.available)

    writeJSON()
    res.render("payment",{message:"Payment Successful", account:accounts.credit})
})


module.exports = router