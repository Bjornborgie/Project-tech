
const express = require('express')
const ejs = require("ejs")
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;

require("dotenv").config()


const uri = "mongodb+srv://process.env.MONGO_USER_NAME:$[process.env.MONGO_PASSWORD]" + process.env.MONGO_PORT


const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});







let profile = [{
  id: 1234,
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
  bio: "Hi ik ben 22 jaar en kom uit Amstelveen, momenteel ben ik op zoek naar een serieuze relatie om mee te kunnen nemen naar het jaarlijkse kerstdiner! Ik omschrijf mezelf als een sportief iemand die ook graag een drankje drinkt! ",
  Likes: [4444, 3333, 2222, 1111]


},
{
  id: 66666,
  sureName: "Petra",
  lastName: "Schilder",
  age: 19,
  university: "Hogeschool van Rottetdam",
  work: "administratie",
  hobbys: ["fitness", "ballet", "tennis", "slapen", "feesten"],
  searchingFor: "A serious relationship",
  sentence: "Did you just fart? Because you blow me away!",
  character: ["zelfverzekerd", "rustig"],
  howWouldOthersDescribeYou: "Hardwerkend en altijd eerlijk?",
  bio: "19 lentes jong",
  Likes: [5555, 3333, 2222, 1111]

},

{
  id: 1235,
  sureName: "Marja",
  lastName: "de Boer",
  age: 25,
  university: "Universiteit Utrecht",
  work: "Horeca",
  hobbys: ["shoppen", "uitgaan", "feesten"],
  searchingFor: "Geen idee",
  sentence: "“It’s handy that I have my library card because I’m totally checking you out.”",
  character: ["Gek", "Erg druk"],
  howWouldOthersDescribeYou: "Ergens op de wereld is het 5 uur",
  bio: "Wie o wie festival pakken?",
  Likes: [4444, 3333, 2222, 1111]

}
]

let myProfile = {
  sureName: "Bjorn",
  lastName: "Kouw",
  Likes: [4444, 3333, 2222, 1111]

}


const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()


app = express()
app.use(urlencodedParser)
app.use(jsonParser)
app.use(express.static("Static"))
app.set("view engine", "ejs")
app.set("views", "view")
app.get("/", onhome)
app.get("/contact", oncontact)
app.get("/about", onabout)
app.get("/match", onmatch)
app.get("/overview", onoverview)
// app.get("/profile-detail", onProfileDetail)
app.get("/profile-detail.ejs/:id", onProfileDetail)
app.get("/rob.mp3", mp3on)
app.get("/params/:name/:location/:occuptation", paramson)
app.post("/profile-detail", urlencodedParser, like)
app.get("*", onerror)
app.listen(3000)


let empty;









function like(req, res) {
  let bodyContent = req.body
  // using the empty variable to store the values of the html input
  empty = bodyContent.like

  // split the string from empty into an array
  let splittedContent = empty.split("|")


  // Make a number of the user id
  let convertNumber = Number(splittedContent[1])



  // put the current likes of the user in an array
  let currentLikes = myProfile.Likes

  // Check if convertNumber is liked alread
  let checkNumber = currentLikes.includes(convertNumber)

  // If the current user id is liked already then...
  if (checkNumber == true) {
    res.render("match.ejs", { data: profile })
  }

  // If the current user id is not  liked already then...
  else {
    myProfile.Likes.push(convertNumber);
    res.render("overview.ejs", {
      data: profile
    })
  }


}




function onhome(req, res) {
  res.render("overview.ejs", {
    data: profile
  })
}


function onmatch(req, res) {
  res.render("overview.ejs", {
    data: profile
  })
}

function onoverview(req, res) {
  res.render("overview.ejs", {
    data: profile
  })
}


function onProfileDetail(req, res) {

   for (var i = 0; i < profile.length; i++) {

if (profile[i].id == req.params.id){
  res.render("profile-detail.ejs", {data: profile[i]})

}
   }

  // res.send("profile of " + req.params.id)

 

  // res.render("profile-detail.ejs", {
  //   data: profile
  // })
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