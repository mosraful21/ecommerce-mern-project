# E-Commerce MERN Stack Project

## Environment Setup Part:1

    Step-1: npm init -y
    Step-2: npm install express

## Express Server Setup

    const express = require("express");
    const app = express();
    app.get('/', (req, res) => {
        res.send('Server is Running');
    });
    app.listen(5000, () => {
        console.log("Server is running")
    });

## Environment Setup Part:2

    Step-3: nodemon and morgan package
            * install nodemon and morgan as a development dependency: *
                npm install --save-dev nodemon
                npm install --save-dev morgan  -> app.use(morgan("dev"));
    Step-4: Express Error Handle Middleware -> Install Body Parser package:
                npm install body-parser
    Step-5: Express HTTP Error Handle Middleware -> Install HTTP Errors package:
                npm i http-errors
    Step-6: API Secure -> xss-clean, express-rate-limit
                npm i xss-clean
                npm i express-rate-limit
    Step-7: .env variable & .gitignore
                Install dotenv -> npm i dotenv

## Create MiddleWare and Used

    const isLoggedIn = (req, res, next) => {
        const login = true;
        if(login){
            next();
        }else{
            return res.status(401).json({ message: "Please Login First" });
        }
    };
    app.get("/api/users", isLoggedIn, (req, res) => {
        res.status(200).send({ message: "User Profile is return" });
    });

## HTTP Request & Response

    HTTP Request Method:
            GET -> Server to Client Data Show
            POST -> Client to Server Data Send
            PUT -> For Data Update
            DELETE -> For Data Delete
        HTTP Headers: content-type, cookies
        Body: data

    HTTP Response Method:
        Status Code: 200 404 400 500
        HTTP headers: cookies
        Body: JSON, HTML Data

## MVC Architecture -> Model, View, Controller

    Step-1: Create Router & export. module.exports = router;
    Step-2: Router use app.js file. Example: app.use("/api/user", route);
    Step-3: Create Controller. const getUser = (req, res, next) => {try{...}catch(error){...} };
    Step-4: Create Model. (Fetch Data);

    const users = [ (MODELING PART or DATA LOAD FILE)
        { id: 1, name: "Mosraful Habib" },
        { id: 2, name: "Nafisa Sultana" },
    ];
    app.get("(ROUTTING PART) - /api/test", (CONTROLLER PART) - (req, res, next) => {
        res.status(200).send({
            message: "API is working Fine",
            next();
        });
    });

## MongoDB Setup

    MongoDB is a NoSQL Database. It's data store by Binary Object Notation (BSON) format
    Step-1: Connect to MongoDB Compass and Copy URL to .env file
    Step-2: Create a User to Database Access: (userName, Password)
    Step-3: Set userName and Password to URL
    Step-4: Install Mongoose package : npm i mongoose
    Step-5: Schema and Model for User:
    Step-6: Install Bcrypt package for User Password Security : npm i bcrypt

## User data setup

    Step-1: Create seed route for testing
    Step-2: GET /api/users -> isAdmin -> getAllUSers -> searchByName + pagination functionality
    Step-3: ResponseHandler controller for error or success
    Step-4: GET /api/users/:id -> get a single user by id
    Step-5: How to create services in the backend
    Step-6: DELETE / api/users/:id -> delete a single user by id
    Step-7: Refactoring & Reusability, Dynamic
    Step-8: DeleteImage helper

    Step-9: POST /api/users/process-register -> porcess the registration
    Step-10: POST /api/users/verify -> verify + register into database
    Step-11: Create Json Web Token (JWT) -> npm i jsonwebtoken
    Step-12: Setup smtp server & prepare email
    Step-13: Sent email with nodemailer -> npm install nodemailer
    Step-13: POST /api/users/verify -> verify + register into database
