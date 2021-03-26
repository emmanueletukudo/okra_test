
require("dotenv").config();
const okra = require("npm-okrajs");
const axios = require("axios");

const account = {
    get: async (req, res, next) =>{
        try {
            const {account_no, account_name} = req.data;
            const base_url = process.env.api_url;
            axios.get(`${base_url}/products/accounts`, 
            
            )

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {account};