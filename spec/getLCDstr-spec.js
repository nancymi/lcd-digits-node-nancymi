'use strict';

var main = require('../main/main.js');
var source = require('../main/source.js');

var NumberLCD = require('../main/NumberLCD.js');

describe('getLCDStr(): get LCD string', function() {
   it('give a NumberLCD:object list then print a NumberLCDStr:string', function() {
       let input = [new NumberLCD('._.', '|_|', '..|'),
           new NumberLCD('...', '..|', '..|'),
           new NumberLCD('._.', '|.|', '|_|')];

       let output = '._. ... ._.\n|_| ..| |.|\n..| ..| |_|';

       expect(main.getLCDStr(input)).toEqual(output);
   })
});