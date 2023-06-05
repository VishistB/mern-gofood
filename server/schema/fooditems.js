const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        CategoryName: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        options: [
            {
                half: String,
                full: String,
            },
        ],
        description: {
            type: String,
            required: true,
        },
    },
    {
        collection: "food_items",
    }
);
mongoose.model("food_items",foodSchema);