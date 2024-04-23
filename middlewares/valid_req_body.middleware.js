const validateBody = (schema) => async (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.body);
      if (error) return res.status(406).json(error.details);
      req.body = value;
      return next();
    } catch (err) {
      return res.status(406).json({ type: err.name, message: err.message });
    }
  };
  module.exports = validateBody;
  