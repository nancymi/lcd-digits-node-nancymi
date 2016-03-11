'use strict';

var main = require('../main/main.js');
var source = require('../main/source.js');

var NumberLCD = require('../main/NumberLCD.js');

describe('translate(): traslate a number list to a number lcd list', function() {
   it('when give a number:int list then print a NumberLCD:object list', function() {
       let input = [9, 1, 0];
       let output = [new NumberLCD('._.', '|_|', '..|'),
           new NumberLCD('...', '..|', '..|'),
           new NumberLCD('._.', '|.|', '|_|')];

       expect(main.translate(input, source.loadLCDResource)).toEqual(output);
   }) ;
});