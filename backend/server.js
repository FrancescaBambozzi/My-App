const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var router = express.Router(); // get an instance of router

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// MongoDB database
const mongoURL = "mongodb+srv://FrancescaDB:caneotto8!@cluster0-iqjsd.mongodb.net/test?retryWrites=true&w=majority";
const port = process.env.PORT || 8080;

MongoClient.connect(mongoURL, (err, db) => {
    var dbase = db.db("itinerary-app");
    if (err) {
        console.log(err);
    } else {
        console.log('MongoDB connection success')
    }

    app.listen(port, function () {
        console.log('Magic happen on port ' + port)
    })

    // landing page route (http://localhost:8080)
    router.get('/', function (req, res) {
        res.send('Landing Page')
    })

    //Cities Page route
    router.get('/cities/all', function (req, res) {
        dbase.collection("cities").find().toArray((err, result) => {
            if (!err) {
                return res.send(result)
            }
        })
    })

    app.use('/', router);

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

