const mongoose = require("mongoose");    // You need mongoose to interact with a MongoDB database. It's used at the beginning of a file where you want to define models, schemas, or interact with the database in general.
const { create } = require("./listing");
const Schema = mongoose.Schema;          //This extracts the Schema constructor from the mongoose object.  
                                        //  A schema is a blueprint for how documents will be structured in the MongoDB database.

const reviewSchema = new Schema ({
    comment: String,                   //store textual feedback for the review.that is of type String
    rating: {
        type: Number,                   //field rating that must be a Number type.
        min:1,
        max:5,
    },
    createdAt: {                         //records the date and time when the review was created.
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Review",reviewSchema);    //mongoose.model() takes two arguments: 1)"Review": This is the name of the model. It will represent the reviews collection in the MongoDB database
                                                                                                //  2) reviewSchema: defines the structure of the documents in the reviews collection.