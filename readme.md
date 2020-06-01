# Dating app CMD Tech by Bjornborgie

De opdracht vanuit mijn studie CMD was om een feature van een dating app te ontwikkelen, ik heb me focusde mij in deze tijd op de like functionaliteit de stack:

*  [Node.js](https://nodejs.org/en/)
*  [express](https://expressjs.com/) 
* [Mongodb](https://www.mongodb.com/)  
* [templating engine EJS](https://ejs.co/)



### Jobstory 

De functionaliteit is uit de volgende jobstory gekomen: _When I see a profile of a person I like with my laptop on the couch at home at night, I want to have a reason to talk to her whenever she likes me about philosophical questions. so that a conversation follows in which we can get to know each other better, which can lead to a date and a relationship._


### Installation 

You can install this project so you can play around with it yourself. First clone the repo on your local computer

`git clone https://github.com/Bjornborgie/Project-tech`

Then use `NPM install` to install the following dependencies and dev dependencies:

##### dependencies 

*  [body-parser](https://www.npmjs.com/package/body-parser)
*  [dotenv](https://www.npmjs.com/package/dotenv)
* [https://www.npmjs.com/package/ejs](ejs)
* [express](https://www.npmjs.com/package/express)
* [express-session](https://www.npmjs.com/package/express-session)
* [mongodb](https://www.npmjs.com/package/mongodb)



##### dev dependencies
 * [eslint](https://www.npmjs.com/package/eslint)
* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [prettier](https://www.npmjs.com/package/prettier)


### Installation 

The project comes with the following start scripts declared in the package.json to have some shortcuts


```
 "start": "nodemon server.js",
 "clean": "rm -r dist && mkdir dist",
 "prebuild": "npm run clean",
 "lint": "npx eslint"
```


### Mongo database structure  
