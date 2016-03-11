'use strict'

var source = require('./source.js');
var _ = require('lodash');

function printLCD(number) {
    var numberList = divide(number);
    var numberLCDList = translate(numberList, source.loadLCDResource);
    var numberLCDStr = getLCDStr(numberLCDList);

    return numberLCDStr;
}

function divide(number) {
    var numberList = [];
    var numberStrList = number.split('');
    numberStrList.forEach( numberStr => {
        numberList.push(parseInt(numberStr));
    });
    return numberList;
}

function translate(numberList, loadLCDResource) {
    var numberLCDList = [];
    var numberLCDs = loadLCDResource();
    numberList.forEach( number => {
        numberLCDList.push(numberLCDs[number]);
    });
    return numberLCDList;
}

function getLCDStr(numberLCDList) {
    var numberLEDStrList = [];

    for (var i = 0; i < 3; i ++) {
        var numberLEDLineStrList = [];
        numberLCDList.forEach( numberLCD => {
            numberLEDLineStrList.push(numberLCD.line[i]);
        });
        var numberLEDLineStr = numberLEDLineStrList.join(' ');
        numberLEDStrList.push(numberLEDLineStr);
    }

    var numberLEDStr = numberLEDStrList.join('\n');
    return numberLEDStr;
}


exports.divide = divide;
exports.translate = translate;
exports.getLCDStr = getLCDStr;
exports.printLCD = printLCD;