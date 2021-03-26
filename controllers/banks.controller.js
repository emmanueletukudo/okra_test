require("dotenv").config();
const okra = require("okra-node");

const account = {
  banks: async (req, res, next) => {
    try {
      const token = process.env.private_key;
        //console.log(token);
        const id = await okra.getBanks((err, results) => {
        // Handle err
        const banks = results.banks;
        return banks;
        });
      return res.json(id);
    } catch (error) {
      res.json(error.message);
    }
  },
};

module.exports = { account };
