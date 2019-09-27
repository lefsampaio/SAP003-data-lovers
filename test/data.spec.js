require("../src/data.js");

const test = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]},
  {
    "id": 4,
    "num": "004",
    "name": "Charmander",
    "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ]},
  {
    "id": 8,
    "num": "008",
    "name": "Wartortle",
    "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
    "weaknesses": [
      "Electric",
      "Grass"
    ]}
];

describe("pokemon", () => {
  it("is a object", () => {
    expect(typeof pokemon).toBe("object");
  });
});
