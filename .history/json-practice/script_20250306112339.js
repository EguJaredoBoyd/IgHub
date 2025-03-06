const data = `{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}`


const superHeroes = JSON.parse(data);

console.log(superHeroes);

console.log(superHeroes.homeTown);
console.log(superHeroes.members[0].age);
console.log(superHeroes["active"]);
console.log(superHeroes.active);

console.log(superHeroes.members[2]["name"]);
console.log(superHeroes.members[2]["powers"].slice(0,3));

console.log(superHeroes["members"][2]["name"]);
console.log(superHeroes["members"][2]["powers"].slice(0,3));
console.log(superHeroes["members"][2]["powers"]["slice"](0,3));


const newData = `[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]`;

const newSupes = JSON.parse(newData);

console.log(newSupes);
