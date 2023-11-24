const mongoose = require("mongoose");

const SectorSchema = mongoose.Schema({
   Value: { type: String },
   Text: { type: String },
});

const Sector = mongoose.model("sector", SectorSchema);

module.exports = Sector;
