function addTwoNums() {
    return 5 + 2;
};

console.log(addTwoNums());

const add2Nums = 5 + 2;
console.log(add2Nums);

function subtractTwoNums() {
    a = 10
    b = 5
    c = a - b
    return c;
};

console.log(subtractTwoNums());

function multiplyTwoNums() {
        x = 2
        y = 4
        return x * y;
};

console.log(multiplyTwoNums());

function divideTwoNumbers() {
    return 10 / 2;
};

console.log(divideTwoNumbers());

/* anonymous funtion */

const subTwoNums = function () {
    return 5 - 2;
};

console.log(subTwoNums());

/* arrow function */
const x3Nums = () => {
    return 1 * 2 * 5;
};

console.log(x3Nums());

function addTwoNums() {
    console.log(5 + 2);
}

addTwoNums();

const btn = document.querySelector("button");

btn.addEventListener("click", addTwoNums);

