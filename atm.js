"use strict";

let {pinNumber, accountBalance} = require('./Account.js');
const prompt = require('prompt-sync')();


function getBalance() {
    console.log(accountBalance);

}


function getWithdraw() {
    let withdrawl = parseInt(prompt("Enter the amount you would like to withdraw? $"));
    if(withdrawl > 0) {
        accountBalance = accountBalance - withdrawl;
            console.log(`Transaction successful. Current balance $${accountBalance}`);
    }

}


function getDeposit() {
    let deposit = parseInt(prompt("Enter the amount you would like to deposit? $"));
    if(deposit > 0) {
        accountBalance = accountBalance + deposit;
            console.log(`Transaction successful. Current balance $${accountBalance}`);
    }

}


function getValidatePin() {


}


module.exports = {balance: getBalance, withdraw: getWithdraw, deposit: getDeposit, validate: getValidatePin}