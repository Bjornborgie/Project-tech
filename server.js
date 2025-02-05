// Declaring all packages I need
const express = require('express')
const ejs = require("ejs")
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const objectId = require('mongodb').ObjectID
const session = require('express-session')
const assert = require("assert")

//source  https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7#:~:text=The%20process.,is%20in%20when%20it%20starts.&text=env.,calls%20to%20them%20if%20required.
require("dotenv").config()

// tell how long the cookie will be used by default is closes when the browser window closes
const oneDay = 1000 * 60 * 60 * 24


// Make connenction with my MongoDB database   source https://cloud.mongodb.com/v2/5ecbbc1f98602632447e76ec#clusters/connect?clusterId=Cluster0
const uri = "mongodb+srv://" + process.env.MONGO_USER_NAME + ":" + process.env.MONGO_PASSWORD + process.env.MONGO_LOCACTION


const client = new MongoClient(uri, { useNewUrlParser: true });



const urlencodedParser = bodyParser.urlencoded({ extended: false })


// Setting up my cookie and the express server source https://www.youtube.com/watch?v=OH6Z0dJ_Huk
app = express()
app.use(session({
  name: process.env.NAME_COOKIE,
  user: "-",
  secret: process.env.SECRET_COOKIE,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: oneDay,
    sameSite: true
  }
}))


// Tell Express that I use parser to help me with forms 

app.use(urlencodedParser)

// Tell Express it has to use Static files, I use EJS, and where my EJS files are source https://expressjs.com/en/starter/basic-routing.html
app.use(express.static("Static"))
app.set("view engine", "ejs")
app.set("views", "view")

// Declaring the get and post requests 
app.get("/", onhome)
app.get("/matches", itsAMatch)
app.get("/match", onmatch)
app.get("/overview", onoverview)
// after profile detail in the url there has to object id has to be specified
app.get("/profile-detail.ejs/:_id", onProfileDetail)
app.post("/profile-detail/", urlencodedParser, like)
app.post("/overview", urlencodedParser, user)
app.post("/", urlencodedParser, user)
app.get("*", onerror)

// Port where nodeJS is listening
app.listen(3000)


// If  can't connect with my MongoDB database throw an error source https://github.com/cmda-bt/be-course-19-20/tree/master/examples
client.connect(function (err) {
  if (err) {
    throw err
  }
})



// The route that helps me with choosing a profile on the home screen after the pull request
function user(req, res) {

  // Search in my database and find in the database the collection my_profile and profiles
  const collection = client.db(process.env.DB_NAME).collection(process.env.ALL_PROFILE_COLLECTION)

  // from my database put get all the objects and put them in an array
  collection.find({}).toArray(function (err, profile_list) {


    // Get the value of the html dom users
    let userObject = req.body.users

    // Save the value of users in the session
    req.session.user = userObject


    let val = req.session.user

    // check the session value and dependant of the session value you gonna see profiles
    if (req.session.user == "Martijn") {
      profile_db = []

      profile_db.push(profile_list[0])
      profile_db.push(profile_list[1])

    }


    if (req.session.user == "Claudio") {
      profile_db = []

      profile_db.push(profile_list[0])

    }
    if (req.session.user == "Jan") {
      profile_db = []
      profile_db.push(profile_list[0])
      profile_db.push(profile_list[2])


    }
    res.render("overview.ejs", { data: profile_db, user: val })
  })



}



function itsAMatch(req, res) {

  const collection = client.db(process.env.DB_NAME).collection(process.env.ALL_PROFILE_COLLECTION)

  const myprofile = client.db(process.env.DB_NAME).collection(process.env.MY_PROFILE_COLLECTION)

  collection.find({}).toArray(function (err, profile_list) {

    myprofile.find({}).toArray(function (err, myprofile_list) {

      myprofile_db = myprofile_list

      profile_db = profile_list

      let val = req.session.user


      for (let i = 0; i < myprofile_db.length; i++) {

        if (myprofile_db[i].SureName == req.session.user) {

          let currentLikes = myprofile_db[i].Likes


          let profilesWhoLikedMe = []

          for (let i = 0; i < profile_db.length; i++) {


            if (profile_db[i].Likes.includes(String(myprofile_db[i]._id)) == true) {
              profilesWhoLikedMe.push(profile_db[i])

              for (let i = 0; i < profilesWhoLikedMe.length; i++) {
                let match = []

                if (currentLikes.includes(String(profilesWhoLikedMe[i]._id)) == true) {
                  match.push(profilesWhoLikedMe[i])
                }

              }
            }
          }
        }
      }

    })
  })
}







// Route that helps me with the likes

function like(req, res) {

  const collection = client.db(process.env.DB_NAME).collection(process.env.ALL_PROFILE_COLLECTION)

  const myprofile = client.db(process.env.DB_NAME).collection(process.env.MY_PROFILE_COLLECTION)

  collection.find({}).toArray(function (err, profile_list) {

    myprofile.find({}).toArray(function (err, myprofile_list) {


      // Stores a variable with all the profiles
      myprofile_db = myprofile_list


      profile_db = profile_list




      let val = req.session.user


      let bodyContent = req.body

      // using the empty variable to store the values of the html input
      let empty = bodyContent.like

      // split the string from empty into an array
      let splittedContent = empty.split("|")


      // Select the second value of the array where the id of the user who you have liked is
      let convertNumber = splittedContent[1]
      console.log(convertNumber)

      // source https://www.youtube.com/watch?v=OH6Z0dJ_Huk
      req.session.liked = convertNumber

      // Loop and if statement that search the profile that belongs to me
      for (let i = 0; i < myprofile_db.length; i++) {

        if (myprofile_db[i].SureName == req.session.user) {


          // Put the  array likes in the variable current likes
          let currentLikes = myprofile_db[i].Likes


          // Gets my object id and converts it too an string because its an object ID
          let myId = String(myprofile_db[i]._id)
          console.log(myId)



          console.log(currentLikes)



          // // Check if convertNumber is liked already
          let checkNumber = currentLikes.includes(convertNumber)


          for (let i = 0; i < profile_db.length; i++) {

            if (profile_db[i]._id == convertNumber) {
              let likeProfile = profile_db[i].Match



              // // If the current user id is liked already then and has a match then...

              if (checkNumber == true && likeProfile == false) {

                //    https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/  https://stackoverflow.com/questions/47656515/updateone-on-mongodb-not-working-in-node-js
                collection.updateOne({ _id: objectId(convertNumber) }, { $set: { "Match": true }, $push: { ["Likes"]: myId } })
                res.render("match.ejs", { data: profile_db })
              }



              else if (checkNumber == true && likeProfile == true){
                collection.updateOne({ _id: objectId(convertNumber) }, { $set: { "Match": false }, $pull: { ["Likes"] : "ik weet zeker dat dit werkt" } })
                collection.updateOne({ _id: objectId(myId)},{ $push: { ["Likes"]: 'Hallo' } } )
                res.render("overview.ejs", { data: profile_db, user: val })

              }


              else if (checkNumber == false && likeProfile == true) {
                collection.updateOne({ _id: objectId(convertNumber) }, { $set: { "Match": false }, $push: { ["Likes"] : "dit werkt" } })
                collection.updateOne({ _id: objectId(myprofile_db[i]._id)},{ $push: { ["Likes"] : 'HOI' } } )
                res.render("overview.ejs", { data: profile_db, user: val })
              }



              // else if (checkNumber == true && likeProfile == true) {
              //   collection.updateOne({ _id: objectId(convertNumber) }, { $set: { "Match": false }, $push: { ["Likes"]: myId } })
              //   res.render("overview.ejs", { data: profile_db, user: val })
              // }

              // else if (checkNumber == false && likeProfile == true) {
              //   collection.updateOne({ _id: objectId(convertNumber) }, { $set: { "Match": false }, $push: { ["Likes"]: myId } })
              //   res.render("overview.ejs", { data: profile_db, user: val })
              // }


              // // If the current user id is not liked already then and there is no match then...
              else {
                collection.updateOne({ _id: objectId(convertNumber) }, { $push: { ["Likes"]: myId } })


                res.render("overview.ejs", { data: profile_db })

              }
            }

          }
        }
      }


    })
  })
}




function onhome(req, res) {
  const collection = client.db(process.env.DB_NAME).collection(process.env.ALL_PROFILE_COLLECTION)
  collection.find({}).toArray(function (err, profile_list) {


    let val = req.session.user

    if (req.session.user == "Martijn") {
      profile_db = []

      profile_db.push(profile_list[0])
      profile_db.push(profile_list[1])

    }


    if (req.session.user == "Claudio") {
      profile_db = []

      profile_db.push(profile_list[0])

    }
    if (req.session.user == "Jan") {
      profile_db = []
      profile_db.push(profile_list[0])
      profile_db.push(profile_list[2])


    }

    else {
      profile_db = []

    }


    res.render("overview.ejs", { data: profile_db, user: val })
  })

}




function onmatch(req, res) {
  res.render("overview.ejs", {
    data: profile
  })
}

function onoverview(req, res) {
  // source https://stackoverflow.com/questions/47662220/db-collection-is-not-a-function-when-using-mongoclient-v3-0
  const collection = client.db(process.env.DB_NAME).collection(process.env.ALL_PROFILE_COLLECTION)
  collection.find({}).toArray(function (err, profile_list) {


    let val = res.locals.user = req.session.user

    if (req.session.user == "Martijn") {
      profile_db = []

      profile_db.push(profile_list[0])
      profile_db.push(profile_list[1])

    }


    if (req.session.user == "Claudio") {
      profile_db = []

      profile_db.push(profile_list[0])

    }
    if (req.session.user == "Jan") {
      profile_db = []
      profile_db.push(profile_list[0])
      profile_db.push(profile_list[2])


    }

    else {
      profile_db = []

    }


    res.render("overview.ejs", { data: profile_db, user: val })
  })
}


function onProfileDetail(req, res) {

  const collection = client.db(process.env.DB_NAME).collection(process.env.ALL_PROFILE_COLLECTION)
  collection.find({}).toArray(function (err, profile_list) {
    profile_db = profile_list

    for (let i = 0; i < profile_db.length; i++) {

      // I ask which params have been requested and I loop through all the profiles and send the requested one
      if (profile_db[i]._id == req.params._id) {

        res.render("profile-detail.ejs", { data: profile_db[i] })


      }
    }



  })


}


// 404 source https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
function onerror(req, res) {
  res.send("<h1>Hello error!</h1>")
}

