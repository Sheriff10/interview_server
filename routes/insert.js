const express = require("express");
const validateBody = require("../middlewares/validateBody");
const Data = require("../model/Data");
const Sector = require("../model/Sector");

const router = express.Router();

router.post("/", validateBody, async (req, res) => {
   try {
      const { name, sector } = req.body;

      const data = new Data({ name, sector });
      await data.save();

      res.status(200).send({ message: "New Data Recorded", _id: data._id });
   } catch (error) {
      console.log(error);
      res.status(404).send({ error: error.message });
   }
});

module.exports = router;
