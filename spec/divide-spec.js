'use strict';

var main = require('../main/main.js');
var source = require('../main/source.js');

describe('divide(): divide a number to numberlist', function() {
   it('given a number:string then print a numberlist:int[]', function() {
       expect(main.divide('910')).toEqual([9, 1, 0]);
   }) ;
});