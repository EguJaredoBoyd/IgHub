const myArray = [1, 2, 3, 4, 5];

let foodArray = [ "Rice", "Beans", "Yam", "Garri", "Egg", "Bread"];

let boolArray = [true, false, true, false, true, false, true];

let mixedArray = [1, 10, 50, "Rice", "Jared", "Garri", false, true, 20];

const nestedArray = [ "Egg", 45, 20.5, false, [1, 2, 3, 4, 5], foodArray];

const newArray = ["Jared", "Mongo Park", {Food: "Rice", Color: "Blue"}]

const snacks = ["Beloxxi", "Meatpie", "Eggroll", "Peanuts", "Doughnuts", "Icecream"]
const newSnacks = snacks.slice(0,3);

const states = ["Abia", "Adamawa", "Akwa Ibom", "Rivers", "Cross River", "Zamfara", "Abuja", "Lagos", "Borno", "Kebbi",];
const middleSix = states.slice(2,8);
const stateSplice = states.splice(5,5);

const fruits = ["Orange", "Mango", "Pear",];
const newfruits = fruits.join("   ");

console.log("Nested array: ", nestedArray, nestedArray[0])
console.log(nestedArray[4][3]);
console.log(newArray[2].Color)

/*const display = document.querySelector("h1");
display.innerText(newArray[2].color);*/

mixedArray.length;
console.log(mixedArray.length);
console.log(mixedArray.pop());
console.log(mixedArray);
console.log(mixedArray.toString());
console.log(mixedArray.slice());

const foodAndNums = foodArray.concat(myArray);
console.log(foodAndNums);

console.log(newSnacks);
console.log(middleSix);
console.log(newfruits);
console.log(stateSplice);
console.log(states);