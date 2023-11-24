const mongoose = require("mongoose");
require('dotenv').config();

mongoose
   .connect(process.env.MONGODB_URI, { maxPoolSize: 10 })
   .then(() => {
      console.log("Connect to database successfully");
   })
   .catch((err) => {
      console.log(`Database Connection Error: ${err}`);
   });
