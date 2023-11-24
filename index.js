const express = require("express");
require("./start/db");
require("express-async-errors");
const cors = require('cors');
const errorMiddleware = require("./middlewares/error");

// routes module
const insertRoute = require("./routes/insert.js");
const sectorsRoute = require("./routes/getSectors.js");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(
   cors({
      origin: "*", // Allow requests from any origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow the specified methods
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
   })
);
app.use(express.json());

app.use("/post/data", insertRoute);
app.use("/get/sectors", sectorsRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`);
});
