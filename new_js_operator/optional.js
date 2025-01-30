// https://www.freecodecamp.org/news/javascript-optional-chaining/
// https://www.geeksforgeeks.org/javascript-optional-chaining/

const user = {
    dog: {
        name: "Alex"
    },
    printShow() {
        console.log('coming inside func');
    }
};

// console.log(user.cat?.name); //undefined
// console.log(user.dog?.name); //Alex
// //console.log(user.cat.name);


user.printShow?.();
console.log(user.dog?.name); //Alex
