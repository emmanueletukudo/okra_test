
require("dotenv").config();
const okra = require("npm-okrajs");
const axios = require("axios");


const account = {
    get: async (req, res, next) =>{
    
        try {
            const {account_no, account_name} = req.data;

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {account};