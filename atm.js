"use strict";

let {pinNumber, accountBalance} = require('./Account.js');
const prompt = require('prompt-sync')();


function getBalance() {
    console.log(accountBalance);

}


function getWithdraw() {
 

}


function getDeposit() {
    let deposit = prompt("Enter the amount you would like to deposit? ");
    if(deposit > 0) {
        accountBalance = accountBalance + deposit;
            console.log(`Transaction successful. Current balance ${accountBalance}`);
    }

}


function getValidatePin() {


}


module.exports = {balance: getBalance, withdraw: getWithdraw, deposit: getDeposit, validate: getValidatePin}