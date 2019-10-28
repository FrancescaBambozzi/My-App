// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be the data base's data structure 
const CitySchema = new Schema(
    {
        id: Number,
        name: String,
        country: String
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Cities", CitySchema);