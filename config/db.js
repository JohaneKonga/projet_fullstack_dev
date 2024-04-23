const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlparser: true,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDatabase;
 