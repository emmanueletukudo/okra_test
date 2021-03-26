
require("dotenv").config();
const okra = require("npm-okrajs");
const axios = require("axios");

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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