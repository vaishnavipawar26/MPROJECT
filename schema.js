const Joi = require("joi");
const review = require("./models/review");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        tital: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.string().required(),
        image: Joi.string().required(),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5),
        Comment: Joi.string().required(),
    }).required(),
});

