'use strict';

/**
 * 
 * ._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
 * |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
 * |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|
 *
 */

var NumberLCD = require('../main/NumberLCD.js');

function loadLCDResource() {
    let NumberLCDList = [
        new NumberLCD('._.', '|.|', '|_|'),
        new NumberLCD('...', '..|', '..|'),
        new NumberLCD('._.', '._|', '|_.'),
        new NumberLCD('._.', '._|', '._|'),
        new NumberLCD('...', '|_|', '..|'),
        new NumberLCD('._.', '|_.', '._|'),
        new NumberLCD('._.', '|_.', '|_|'),
        new NumberLCD('._.', '..|', '..|'),
        new NumberLCD('._.', '|_|', '|_|'),
        new NumberLCD('._.', '|_|', '..|')
    ];
    return NumberLCDList;
}

exports.loadLCDResource = loadLCDResource;