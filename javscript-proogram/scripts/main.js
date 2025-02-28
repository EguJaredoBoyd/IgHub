const myHeading = doccument.querySelector("h1");
console.log("Initial h1 content:", myHeading.textContent)

myHeading.textContent = "Hello World";
console.log("Initial h1 content:", myHeading.textContent)

let firstName = "Jared";
console.log(firstName)
console.log("Initial First Name:", firstName);

firstName = "David";
console.log("Upadated First Name:", firstName);

const classList = ["Chris", "Divine", "Jared", 13, false]
console.log(classList[2]);

const favFood = ["Soup", "Beans", "Plantain", "Rice", "Yam"]
console.log(favFood[3]);

const userResponse = 
{
  firstName: "Jared",
  age: 27,
  address: ["South", "East", "West", "North"],
  favFood:{
    menu1: "Rice",
    menu2: "Beans",
    menu3: "Soup",
  },

}

console.log(userResponse.firstName)



