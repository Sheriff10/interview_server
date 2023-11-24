const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
   name: { type: String, required: true },
   sector: { type: String, required: true },
});

const Data = mongoose.model("data", DataSchema);

module.exports = Data;
