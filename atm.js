"use strict";

const prompt = require('prompt-sync')();
const {pinNumber, accountBalance} = require('./Account.js');


function getBalance() {
    console.log(accountBalance);

}

getBalance();


function getWithdraw() {


}


function getDeposit() {



}


function getValidatePin() {


}


module.exports = {balance: getBalance, withdraw: getWithdraw, deposit: getDeposit, validate: getValidatePin}