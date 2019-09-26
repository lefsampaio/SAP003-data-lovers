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

describe("pokemon.sortData", () => {
  it("is a function", () => {
    expect(typeof pokemon.sortData).toBe("function");
  });

  it("should return alphabetic order ASC", () => {

    expect(pokemon.sortData(mockPokemon, "name", "a-z")).toEqual(
      [{
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "Grass",
          "Poison"]
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
        "id": 149,
        "num": "149",
        "name": "Dragonite",
        "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
        "type": [
          "Dragon",
          "Flying"]
      },
      {
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
        "type": [
          "Dragon"]
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
      }
      ]

    );
  });

});

describe("pokemon.sortData", () => {
  it("is a function", () => {
    expect(typeof pokemon.sortData).toBe("function");
  });

  it("should return alphabetic order DESC", () => {

    expect(pokemon.sortData(mockPokemon, "name", "z-a")).toEqual(
      [{
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
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
        "type": [
          "Dragon"]
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
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "Grass",
          "Poison"]
      },
      ]

    );
  });

});

const nextPoke = {
  "pokemon": [{
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [1.58],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "002",
      "name": "Ivysaur"
    }, {
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.042,
    "avg_spawns": 4.2,
    "spawn_time": "07:00",
    "multipliers": [
      1.2,
      1.6
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }],
    "next_evolution": [{
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }, {
      "num": "002",
      "name": "Ivysaur"
    }]
  }]
};

describe("pokemon.candies", () => {
  it("is a function", () => {
    expect(typeof pokemon.candies).toBe("function");
  });

  it("should return if has next evolution ", () => {
    expect(pokemon.candies(nextPoke.pokemon, "Bulbasaur")).toEqual([25, 100
    ]);

  });

});
const filterCandies = pokemon.candies(nextPoke.pokemon, "Bulbasaur");
describe("pokemon.computeStats", () => {
  it("is a function", () => {
    expect(typeof pokemon.computeStats).toBe("function");
  });

  it("should return prev_evolution candy + next_evolution candy", () => {
   
    expect(pokemon.computeStats(filterCandies)).toEqual(125);
  });

});

