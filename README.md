# Simple MERN App

## Installation

To install client files run: `run client-install` this will install all the client dependecies.

To install server modules run `npm install` or `yarn`

## Running the app

`npm run client-build` to build the client build file.

`npm run dev` to test the application. Client runs in port 3000, and server runs in port 8000.

# Client

There is a **client** folder which has been generated with the `create-react-app` cli tool.

## Components

`client/src/components/`

**Dashboard > Dashboard.js**
This will be the user dashboard, when user successfully log in.

**Homepage > Homepage.js**
This will be the website homepage to have signup/login forms etc.

**Functions**

`<Homepage/>`
**function** | `register()` | This takes the user input and sends them to the api/register to register for a new user to the database via REST api.
**params** | e | object | This is default event object
_Local vars_
username | string | it takes the user input username from `e.target.username.value`
password | string | the user input password, similar to username
_Inner methods_
fetch | '/api/register' | sends the user registration info via POST method as JSON

# Server

## Routes/api

`/routes/api/index.js` is the default router file for all the general api requests, more will be added if it get's too complicated.

Methods
register | POST | this will send a POST request to register the user to the database

## User Controller

`/controllers/userController.js` is the primary file for handling user registration functions.

Requires the `User` model from `/models/User.js`

**User registration flow**

Validate the form
Check if the user already exists
Register the user
Log the user in

**checkUser()**
func | checkUser | Check the database to see if the user already exists or not. There will be 2 checks, one in the client side and this is the fall back in the server side.
params | req, res, next | from express.
try
const | user | result of User.find() method using await
if block
if the user.length is null then go next() and exit the program.
catch
error

**register()**
func | register | This will register the user into the database
params | req, res, next (optional) | objects | Standard express objects
_Local vars_
user | new instance of User object that takes username in the body.
_Inner methods_
User.register(user, req.body.password, cb)
The method is inside a try catch block and is a async function.

# Dev log

_Sep 7, 2018_
Creating this basic MERN app to build out an app as a learning project.
Adding react-router-dom for making this app multi page, mainly a login page and dashboard page.

_Sep 8, 2018_
Started to work on the app by writing docs while slowly working on the user registration flow.
The login redirect doesn't seem to work with react, have to look at other things.
Just figured it out. I have to send a status of 200. In react I can get the respose. When I get that response, I will just redirect using history.push.
