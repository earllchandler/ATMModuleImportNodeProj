"use strict";

const prompt = require('prompt-sync')();
const {pinNumber, accountBalance} = require('./Account.js');
const {balance, withdraw, deposit, validate} = require('./atm.js');

function loginAtm() {

  console.log("Welcome to Chandler Bank! Please enter you PIN");

    let enterPin = prompt();


    while(enterPin != pinNumber) {
       enterPin = prompt(`PIN is incorrect! ${enterPin} Please try again. Enter your four digit PIN:`);


        if(enterPin == pinNumber) {
          console.log("PIN is correct! Please proceed!");


    }

    }

}

  loginAtm();

function mainMenu() {
  let options = console.log("PIN is correct, please proceed!  Welcome! Please choose one of the following options: <1> for account balance <2> for deposit, <3> for withdrawl, or <4> to exit");

  switch(options){
    case '1':
       console.log(balance);
      break;
    case '2':
      // getDeposit()
      break;

    case '3':
      // getWithdraw()
      break;

    case '4':
      
      break;

}

}

mainMenu();