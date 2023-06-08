const mongoose = require("mongoose");

const foodCategorySchema = new mongoose.Schema(
    {
        CategoryName: {
            type: String,
            required: true,
        }
    },
    {
        collection: "foodCategory",
    }
);
mongoose.model("foodCategory",foodCategorySchema);