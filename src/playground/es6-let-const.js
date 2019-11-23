var nameVar = 'Can';
var nameVar = 'Cem';

console.log('nameVar', nameVar);

let nameLet = 'Ali';
nameLet = 'Veli'; //valid
//let nameLet = 'Veli'; -> Duplicate declaration!
console.log('nameLet', nameLet);

const nameConst = 'Osman';
//nameConst = 'Ömür'; -> const is read-only!
//const nameConst = 'Ömür';  -> Duplicate declaration!
console.log('nameConst', nameConst);


//Block Scoping

var fullName = 'Can Yener';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);  //We can access if firstName is 'var', CANNOT access if it is 'let' or 'const'