'use strict';

var nameVar = 'Can';
var nameVar = 'Cem';

console.log('nameVar', nameVar);

var nameLet = 'Ali';
nameLet = 'Veli'; //valid
//let nameLet = 'Veli'; -> Duplicate declaration!
console.log('nameLet', nameLet);

var nameConst = 'Osman';
//nameConst = 'Ömür'; -> const is read-only!
//const nameConst = 'Ömür';  -> Duplicate declaration!
console.log('nameConst', nameConst);
