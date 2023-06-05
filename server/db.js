const mongoose = require("mongoose");
require("./schema/fooditems");

mongo_url =
    "mongodb+srv://VishistB:gofoodMDB123@cluster0.nvpxguz.mongodb.net/gofoodmern?retryWrites=true&w=majority";
    const fetchData = () => {
        const FoodItem = mongoose.model("food_items");
        FoodItem.find({})
          .then((data) => {
            console.log('Fetched data:');
            data.forEach((item) => {
              console.log(item);
            });
          })
          .catch((error) => {
            console.log('Error fetching data:', error);
          });
    };

const mongoDB = () => {
    mongoose
        .connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MongoDB connected");
            // fetchData();
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        });
};
// const mongoDB = async () => {
//     await mongoose.connect(
//         mongo_url,
//         { useNewUrlParser: true },
//         async (err, result) => {
//             if (err) console.log("---", err);
//             else {
//                 console.log("connected");
//                 const fetched_data = await mongoose.connection.db.collection("food_items");
//                 fetched_data.find({}).toArray(function (err, data) {
//                     if (err) console.log(err);
//                     else console.log(data);
//                 });
//             }
//         }
//     );
// };

module.exports = mongoDB();
