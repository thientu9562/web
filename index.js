const express = require("express");

const morgan = require('morgan');
const route = require('./routers/index.route');
const app = express();

app.use(morgan('combined'));
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route
route(app);

// set port, listen for requests
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);