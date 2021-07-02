
function catchPokemons(strDirection) {
  let ash = {
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
        ash.position.x -= 1;
        break;
      case "e":
        direction = "East";
        ash.position.x += 1;
        break;
      case "n":
        direction = "North";
        ash.position.y += 1;
        break;
      case "s":
        direction = "South";
        ash.position.y -= 1;
        break;
    }

    let pokemonsInCoordinate = 0;
    if (
      !existsCoordinateInTravelLog(ash.travelLog, ash.position.x, ash.position.y)
    ) {
      pokemonsInCoordinate = 1;
    }

    let log = {
      direction: direction,
      x: ash.position.x,
      y: ash.position.y,
      pokemons: pokemonsInCoordinate,
    };

    ash.totalPokemons += pokemonsInCoordinate;

    ash.travelLog.push(log);
  }


  return ash;
}

//verify if ash already passed that possition

function existsCoordinateInTravelLog(travelLog, x, y) {
  return travelLog.some((entry) => entry.x === x && entry.y === y);
}

function printCoordinate(coord) {
  console.log(`coord: [x:${coord.x}, y:${coord.y}]`);
}

function printTravelLog(ash) {
  for (let i = 0; i < ash.travelLog.length; i++) {
    let log = ash.travelLog[i];
    console.log(
      `Movement ${i}: [direction:${log.direction}, x:${log.x}, y:${log.y}, pokemon:${log.pokemons}],`
    );
  }
}

function printPokemons(ash) {
  console.log(`Pokemons: ${ash.totalPokemons}`);
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => {

let movements = document.getElementById("movements-input").value;
let result = catchPokemons(movements);



document.getElementById("requested-movements").innerHTML = `<p>Movements:${movements}</p>`
document.getElementById("total-pokemons").innerHTML = `<p>Catched Pokemons:${result.totalPokemons}</p>`;



}

);