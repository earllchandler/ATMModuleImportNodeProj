"use strict";

const prompt = require('prompt-sync')();
let {pinNumber, accountBalance} = require('./Account.js');
let {balance, withdraw, deposit, validate} = require('./atm.js');

function loginAtm() {

  console.log("Welcome to Chandler Bank! Please enter you PIN");

    let enterPin = prompt();


    while(enterPin != pinNumber) {
       enterPin = prompt(`PIN is incorrect! ${enterPin} Please try again. Enter your four digit PIN:`);





    }

    }

loginAtm();

function mainMenu() {
  let options = prompt("Welcome! Please choose one of the following options: <1> for account balance <2> for deposit, <3> for withdrawl, or <4> to exit ");

  switch(options){
    case '1':
       balance();
       mainMenu();
      break;
    case '2':
      deposit();
      mainMenu();
      break;

    case '3':
      withdraw();
      mainMenu();
      break;

    case '4':
      console.log("Thank you for choosing Chandler Bank!");
      break;

}



}

mainMenu();