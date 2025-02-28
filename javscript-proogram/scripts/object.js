const gameStats = {
    topSpeed: "251 mpg",
    acceleartion: "60m/s",
    bodyColor: "Red",
};

let place = "Nigeria" 
 const user = {
    firstName: "Divine",
    age: 50,
    location: {
        street: "10 Calabar Street",
        city: "Aba", 
        state:`Abia`,
        country: place,
    },
    isMarried: false,
    kids: 2,
    "Bank Account": "5,000,000,000",
    hobbies: ["Eat", "Sleep", "Code"],
    action: function(){
        return "Jared";

    },
    action2: function(){
        return `Time for ${user.location.country}`;
    },
 };



console.log(gameStats);
console.log(gameStats["acceleartion"]);
console.log(gameStats.bodyColor);

console.log(user.location.state);
console.log(user.hobbies[2]);
console.log(user["location"]["street"]);
console.log(user.action());
console.log(user.action2());