'use strict';

var main = require('../main/main.js');
var source = require('../main/source.js');

describe('printLCD(): a number print a LCD string', () => {
   it('given a number:string then print LCD:string', () => {
       var output = '._. ... ._.\n|_| ..| |.|\n..| ..| |_|';
       expect(main.printLCD('910')).toEqual(output);
   });
});