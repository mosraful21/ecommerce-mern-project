const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");
const seedRouter = require("./routers/seedRouter");
const { errorResponse } = require("./controllers/responseController");

// ********** Middleware Start ********** //
const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 20, // Limit each IP to 20 requests per `window` (here, per 10 minutes)
  message: "Too Many Request from this IP. Please try again Later",
});

app.use(morgan("dev"));
app.use(bodyParser.json()); // app.use(express.json()); //To work with (json data) in request body!
app.use(bodyParser.urlencoded({ extended: true })); // app.use(express.urlencoded({ extended: true })); //To work with (form) in request body!
app.use(xssClean());
app.use(rateLimiter);
// ********** Middleware End ********** //

//MVC Model Components
app.use("/api/users", userRouter);

app.use("/api/seed", seedRouter);

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Hello World!",
  });
});

// Client Error Handling:
app.use((req, res, next) => {
  // res.status(404).send({ message: "Route not found" });
  next(createError(404, "Route not found")); //Using http-error handle middleware
});

// Server Error Handling -> all routes errors here come
app.use((err, req, res, next) => {
  //   console.error(err.stack);
  //   res.status(500).send("Something broke!");

  // return res.status(err.status || 500).json({
  //   success: false,
  //   message: err.message,
  
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
