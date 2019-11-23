// const square = function (x) {
//     return x * x;
// };

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

// const getFirstName = (fullName) => fullName.split(' ')[0];

// console.log(getFirstName('Can Yener'));


//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    console.log(arguments);
    return a + b;
};

//console.log(add(55,1,111));


//this keyword - no longer bound with arrow functions

const user = {
    name: 'Can',
    cities: ['Istanbul', 'Tekirdağ'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city);        
    }
    //ES5 definition
    // printPlacesLived: function() {
    //     //const that = this;

    //     //Works with arrow function, because this keyword not bound
    //     this.cities.forEach((city) =>  {
    //         console.log(this.name + ' has lived in ' + city);
    //     });
    // }
}

console.log(user.printPlacesLived());
