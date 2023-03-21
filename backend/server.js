const express = require('express');
const path = require('path')
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const routes = require('./routes/route');

const app = express()
const port = process.env.PORT || 5000 

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

app.use(express.json())
app.use(cookieParser());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(cors());
 // Configure urlencoded middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(port, () => {
    console.log('listening on port ' + port)
});
