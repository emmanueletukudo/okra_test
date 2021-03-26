
require("dotenv").config();
const okra = require("okra-node");
const axios = require("axios");

const account = {
    get: async (req, res, next) =>{
        try {
            const token = process.env.client_token;
            const result =  okra.getCustomerByIdentity(token, {type: "BVN", value: "38261936382" }, (err, result) => {
                if(err) return Error(err);
                return result.identity;
            });
            res.json({data: result});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {account};