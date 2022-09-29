const axios = require("axios");
const Txt_Model = require("../models/Txt_Model");
let { random } = require("../utils/helper");
let { isValidRequestBody, isValid } = require("../utils/validator");
require("dotenv").config();

const customer = async (req, res) => {
  try {
    if (!isValidRequestBody(req.body)) {
      return res.status(400, "it can't be empty!");
    }

    if (!isValid(req.body)) {
      return res.status(400, "invalid request Parameters!");
    }

    let custBody = req.body;

    let createCustomer = await Txt_Model.create(custBody);
    return res.status(200).send({ msg: "successfull", createCustomer });
  } catch (error) {
    return res.status(400).send({ msg: "some error has occured" });
  }
};

/* let callAxios = axios
  .get("url")
  .then(function (response) {
    onSuccess(response);
  })
  .catch(function (err) {
    console.log(err);
  }); */

  let callAxios = async (req, res) => {
  let axiosDetails = await axios.get("url");
  return res.status(200).send({msg: "successfull", axiosDetails});
};

function onSuccess(res){
let array = res;
var arrayLength = Object.keys(array).length
console.log(arrayLength);

for(let i = 0; i<=arrayLength; i++){
    let cust_Id = array.data[i].cust_Id;
    let 

}
}



module.exports = { customer, callAxios };
