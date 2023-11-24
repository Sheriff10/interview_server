const Joi = require("joi");

const validateBody = async (req, res, next) => {

   const validate = () => {
      const schema = Joi.object({
         name: Joi.string().required(),
         sector: Joi.string().required(),
      });
      return schema.validate(req.body);
   };

   const { error } = validate();

   if (error) return res.status(400).send({ error: error.message });
   next();
};

module.exports = validateBody;
