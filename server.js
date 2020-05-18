// Begrijp niet waarom app.use(express.static('Static')) alleen de index.html inlaad

const express = require('express')
const ejs = require("ejs")

var car = {
  type: "Fiat",
  model: "500",
  color: "white"
}

var profile = {
  sureName: "Jessica",
  lastName: "de Jong",
  age: 22,
  university: "Hogeschool van Amsterdam",
  work: "Horeca",
  hobbys: ["koken", "voetbal", "tennis", "eten", "series kijken"],
  searchingFor: "A serious relationship",
  sentence: "Ik ben een telefoonboek aan het schrijven. Mag ik je nr?",
  character: ["vrolijk", "enthousiast", "druk"],
  howWouldOthersDescribeYou: "Als een typische studente!",
  bio: "Hi ik ben 22 jaar en kom uit Amstelveen, momenteel ben ik op zoek naar een serieuze relatie om mee te kunnen nemen naar het jaarlijkse kerstdiner! Ik omschrijf mezelf als een sportief iemand die ook graag een drankje drinkt! "

}




app = express()
// app.use(express.static("static"))
app.set("view engine", "ejs")
app.set("views", "view")
app.get("/", onhome)
app.get("/contact", oncontact)
app.get("/about", onabout)
app.get("/match", onmatch)
app.get("/overview", onoverview)
app.get("/profile-detail", onProfileDetail)
app.get("/rob.mp3", mp3on)
app.get("/params/:name/:location/:occuptation", paramson)
app.get("*", onerror)
app.listen(3000)




function onhome(req, res) {
  res.render("index.ejs", {
    data: car
  })
}


function onmatch(req, res) {
  res.render("match.ejs", {
    data: profile
  })
}

function onoverview(req, res) {
  res.render("overview.ejs", {
    data: profile
  })
}


function onProfileDetail(req, res) {
  res.render("profile-detail.ejs", {
    data: profile
  })
}



function oncontact(req, res) {
  res.send("test")
}


function onabout(req, res) {
  res.render("about.ejs", {
    data: car
  })
}


function onerror(req, res) {
  res.send("<h1>Hello error!</h1>")
}

function mp3on(req, res) {
  res.download("./media/rob_geus_man_man_man.mp3")
}

function paramson(req, res) {
  const param = req.params
  res.send(param)

}