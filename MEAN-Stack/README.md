# MEAN-Stack
This is a MEAN stack frontend and backend from scratch I've completed.<br> 
[Tutorial](https://www.youtube.com/watch?v=uONz0lEWft0&list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ)<br>
Mangodb required <br>
`sudo service mongod start`

#### For Testing
Install nodemon `sudo npm install -g nodemon` <br>
`nodemon`<br>
`npm install -g angular-cli`<br>
In /angular-src `npm install`<br>
In /angular-src `ng serve`

### Covers
* Back End
	- NodeJS & Express REST API
	- PassportJS - JWT Authentication
	- MongoDB(Database) & Mongoose ODM(Login)
	- MEAN Deployment
	- CORS, Cross Origin Resource Sharing (Back end request from front end)
* Front End
	- Angular2, 
		- CLI (Command Line Interface), 
		- JWT (Handles Authentication Tokens),
		- Flash Message

#### Notes:
I had to add `mongoose.Promise = global.Promise;` in app.js
````
// Connect to Database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
````

Havn't complied yet...(Part 9 21:00)<br>
`ng build`
