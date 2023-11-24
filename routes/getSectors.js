const express = require("express");
const Data = require("../model/Data");
const Sector = require("../model/Sector");

const router = express.Router();

router.get("/", async (req, res) => {
   try {
      const sectors = await Sector.find(); // get all sector
      res.send({ sectors });
   } catch (error) {
      console.log(error);
      res.status(404).send({ error: error.message });
   }
});

module.exports = router;
