/** EXTERNAL DEPENDENCIES */
const express = require("express");
const logger = require("morgan");

/** ROUTERS */
const recordsRouter = require("./routes/records");
const { setCors } = require("./middleware/cors");

/** INIT */
const app = express();

/** LOGGING */
app.use(logger("dev"));

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** CUSTOM MIDDLEWARE */
app.use(setCors);

/** ROUTES */
app.use("/records", recordsRouter);

/** EXPORT PATH */
module.exports = app;
