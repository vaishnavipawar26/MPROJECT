const express = require('express');
const app = express();
const mongoose = require("mongoose");
//const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");   //reqire the ejs mate bez we have installed ejs mate packaje ( used to create multipal templet eg. navbar)
// const { wrap } = require("module");
//const wrapAsync = require("./utils/wrapAsyc.js");
const ExpressError = require("./utils/ExpressError.js");
//const {listingSchema, reviewSchema} = require("./schema.js");
//const Review = require("./models/review.js");


const listings = require('./routes/listing.js');
const reviews = require('./routes/review');


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

//Middleware and settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.set('layout', 'layouts/boilerplate'); // Path relative to the views folder
app.use(express.static(path.join(__dirname,"/public"))); //it is use to use all static files from public folder

// Routes
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.use("/listings",listings);
app.use("/listings/:id/reviews", reviews);


// Create Route
// app.post("/listings", async (req, res) => {
//   try {
//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (err) {
//     console.error("Error creating listing:", err);
//     res.render("listings/new.ejs", { errorMessage: "All fields are required." }); // Added error handling
//   }
// });


// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });
//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });


app.all("*", (req,res,next) => {
  next(new ExpressError(404,"page Not Found!"));
});

app.use((err,req,res,next) => {
  let {statusCode=500, message ="something went wrong"} = err; 
  res.render("error.ejs");
 // res.send(statusCode).send(message);
});


 // Server Listening
   app.listen(3000, () => {
    console.log("server is listening to port 3000");
  });