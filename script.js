
function catchPokemons(strDirection) {
  let character = {
    position: {
      x: 0,
      y: 0,
    },
    travelLog: [
      {
        direction: "Initial",
        x: 0,
        y: 0,
        pokemons: 1,
      },
    ],
    totalPokemons: 1,
  };

  let pokemons = 0;
  for (let i = 0; i < strDirection.length; i++) {
    let direction;
    switch (strDirection[i]) {
      case "w":
        direction = "West";
        character.position.x -= 1;
        break;
      case "e":
        direction = "East";
        character.position.x += 1;
        break;
      case "n":
        direction = "North";
        character.position.y += 1;
        break;
      case "s":
        direction = "South";
        character.position.y -= 1;
        break;
    }

    let pokemonsInCoordinate = 0;
    if (
      !existsCoordinateInTravelLog(character.travelLog, character.position.x, character.position.y)
    ) {
      pokemonsInCoordinate = 1;
    }

    let log = {
      direction: direction,
      x: character.position.x,
      y: character.position.y,
      pokemons: pokemonsInCoordinate,
    };

    character.totalPokemons += pokemonsInCoordinate;

    character.travelLog.push(log);
  }


  return character;
}

//verify if ash already passed that possition

function existsCoordinateInTravelLog(travelLog, x, y) {
  return travelLog.some((entry) => entry.x === x && entry.y === y);
}

function printCoordinate(coord) {
  console.log(`coord: [x:${coord.x}, y:${coord.y}]`);
}

function printTravelLog(character) {
  for (let i = 0; i < character.travelLog.length; i++) {
    let log = character.travelLog[i];
    console.log(
      `Movement ${i}: [direction:${log.direction}, x:${log.x}, y:${log.y}, pokemon:${log.pokemons}],`
    );
  }
}

function printPokemons(character) {
  console.log(`Pokemons: ${character.totalPokemons}`);
}