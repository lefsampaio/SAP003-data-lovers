require("../src/data.js");

const mockPokemon = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"]
  },
  {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "id": 149,
    "num": "149",
    "name": "Dragonite",
    "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
    "type": [
      "Dragon",
      "Flying"]
  },
  {
    "id": 148,
    "num": "148",
    "name": "Dragonair",
    "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
    "type": [
      "Dragon"]
  },
  {
    "id": 147,
    "num": "147",
    "name": "Dratini",
    "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
    "type": [
      "Dragon"]
  }
];

describe("pokemon", () => {
  it("is an object", () => {
    expect(typeof pokemon).toBe("object");
  });

  describe("pokemon.filterData", () => {
    it("is a function", () => {
      expect(typeof pokemon.filterData).toBe("function");
    });

    it("should return Dragon type Pokemon", () => {

      expect(pokemon.filterData(mockPokemon, "Dragon", "type")).toEqual(
        [{
          "id": 149,
          "num": "149",
          "name": "Dragonite",
          "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
          "type": [
            "Dragon",
            "Flying"]
        },
        {
          "id": 148,
          "num": "148",
          "name": "Dragonair",
          "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
          "type": [
            "Dragon"]
        },
        {
          "id": 147,
          "num": "147",
          "name": "Dratini",
          "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
          "type": [
            "Dragon"]
        }]

      );
    });
  });

});

