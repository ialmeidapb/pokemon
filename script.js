
function catchPokemons(strDirection) {
  let ash = {
    position: {
      x: 0,
      y: 0,
    },
    travelLog: [
      {
        direction: "Starting Point",
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
      case "w" && "W":
        direction = "West";
        ash.position.x -= 1;
        break;
      case "e" && "E":
        direction = "East";
        ash.position.x += 1;
        break;
      case "n" && "N":
        direction = "North";
        ash.position.y += 1;
        break;
      case "s" && "S":
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



function printPokemons(ash) {
  console.log(`Pokemons: ${ash.totalPokemons}`);
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => {

let movements = document.getElementById("movements-input").value;
let result = catchPokemons(movements);



document.getElementById("requested-movements").innerHTML = `<p>Movements:${movements}</p>`
document.getElementById("total-pokemons").innerHTML = `<p>Catched Pokemons:${result.totalPokemons}</p>`;


document.getElementById("atual-position").innerHTML = "";
  for (let i = 0; i < result.travelLog.length; i++) {
    let log = result.travelLog[i];
    document.getElementById(
      "atual-position"
    ).innerHTML += `<span>Movement ${i}: [Direction=> ${log.direction} || Actual Position=> x:${log.x}, y:${log.y}]</span><br/>`;
  }


}

);