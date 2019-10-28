const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const City = require('./models/CitySchema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB database
const dbRoute =
    'mongodb+srv://FrancescaDB:caneotto8!@cluster0-iqjsd.mongodb.net/test?retryWrites=true&w=majority';

// connects the back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('MongoDB database connected successfully'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ROUTES
// get an instance of router
var router = express.Router();

// landing page route (http://localhost:8080)
router.get('/', function (req, res) {
    res.send('Landing Page')
})

//Cities Page route
router.get('/cities', function (req, res) {
    City.find((err, cities) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, cities: cities });
    });
})

//Single City route using Parameters


//Login Page using app.route to define multiple actions on a single login route.
app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function (req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function (req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

app.use('/', router);

// START THE SERVER
app.listen(port, function () {
    console.log('Magic happen on port ' + port)
})