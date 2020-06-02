# Dating app CMD Tech by Bjornborgie

![The-dating-app](https://user-images.githubusercontent.com/63642277/83446900-d28c4080-a44f-11ea-8408-97c67775c4db.png)


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

I visualised the database to give some background information about the written code, this database is from the current prototype but needs another structure when the actual product will be developed. 

![Database](https://user-images.githubusercontent.com/63642277/83545644-c6f85280-a4ff-11ea-9ec6-96e6389a5abd.png)


### Sources 

*   https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073
*   https://docs.npmjs.com/files/package.json
*   https://expressjs.com/
*   https://scotch.io/tutorials/use-ejs-to-template-your-node-application
*   https://www.youtube.com/watch?v=VM-2xSaDxJc
*   https://www.youtube.com/watch?v=OH6Z0dJ_Huk
*   https://cloud.mongodb.com/v2/5ecbbc1f98602632447e76ec#clusters/connect?clusterId=Cluster0
*   https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7#:~:text=The%20process.,is%20in%20when%20it%20starts.&text=env.,calls%20to%20them%20if%20required
*   https://expressjs.com/en/starter/basic-routing.html
*   https://github.com/cmda-bt/be-course-19-20/tree/master/examples
*   https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
*   https://www.youtube.com/watch?v=pWbMrx5rVBE
*   https://www.youtube.com/watch?v=-56x56UppqQ&t=666s
*   https://www.youtube.com/watch?v=17UVejOw3zA&t=470s
*   https://ejs.co/
*   https://expressjs.com/en/guide/using-template-engines.html
*   https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/
*   https://medium.com/swlh/master-ejs-template-engine-with-node-js-and-expressjs-979cc22b69be
*   https://docs.atlas.mongodb.com/getting-started/
*   https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369