/** @format */

const express = require("express");
const createError = require("http-errors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./src/router"));
app.use(async (req, res, next) => {
  next(createError.NotFound("Page not found"));
});
// Error message
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const port = 3200;
app.listen(port, () => console.log(`Applistening on ${port}`));
