require("dotenv").config();
const okra = require("okra-node");

const account = {
  get: async (req, res, next) => {
    try {
      const token = process.env.private_key;
      //console.log(token);
      const result = await okra.getCustomerByIdentity(
        token,
        {type:"bvn", value:"38261936382"},
        (err, result) => {
          if (err) return Error(err);
        return result.identity;
        }
      );
      res.json({ data: result });
    } catch (error) {
      return {error};
    }
  },
};

module.exports = { account };
