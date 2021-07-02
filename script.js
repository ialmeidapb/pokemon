function catchPokemons(strDirection) {
  let ash = {
    position: {
      x: 0,
      y: 0,
    },
    trajectory: [
      {
        direction: "Starting Point",
        x: 0,
        y: 0,
        pokemons: 1,
      },
    ],
    PokeBall: 1,
  };

  let pokemons = 0;
  for (let i = 0; i < strDirection.length; i++) {
    let direction;
    switch (strDirection[i]) {
      case "w":
        direction = "West";
        ash.position.x -= 1;
        break;
      case "W":
        direction = "West";
        ash.position.x -= 1;
        break;
      case "e":
        direction = "East";
        ash.position.x += 1;
        break;
      case "E":
        direction = "East";
        ash.position.x += 1;
        break;
      case "n":
        direction = "North";
        ash.position.y += 1;
        break;
      case "N":
        direction = "North";
        ash.position.y += 1;
        break;
      case "s":
        direction = "South";
        ash.position.y -= 1;
        break;
      case "S":
        direction = "South";
        ash.position.y -= 1;
        break;
    }

    let pokemonsInCoordinate = 0;
    if (
      !existsCoordinateIntrajectory(
        ash.trajectory,
        ash.position.x,
        ash.position.y
      )
    ) {
      pokemonsInCoordinate = 1;
    }

    let log = {
      direction: direction,
      x: ash.position.x,
      y: ash.position.y,
      pokemons: pokemonsInCoordinate,
    };

    ash.PokeBall += pokemonsInCoordinate;

    ash.trajectory.push(log);
  }

  return ash;
}

//verify if ash already passed that possition

function existsCoordinateIntrajectory(trajectory, x, y) {
  return trajectory.some((entry) => entry.x === x && entry.y === y);
}

function printCoordinate(coord) {
  console.log(`coord: [x:${coord.x}, y:${coord.y}]`);
}

function printPokemons(ash) {
  console.log(`Pokemons: ${ash.PokeBall}`);
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  let movements = document.getElementById("movements-input").value;
  let result = catchPokemons(movements);

  document.getElementById(
    "requested-movements"
  ).innerHTML = `<p>Movements:${movements}</p>`;
  document.getElementById(
    "pokeball"
  ).innerHTML = `<p>PokeBall Status (Pokemon Catched):${result.PokeBall}</p>`;

  document.getElementById("atual-position").innerHTML = "";
  for (let i = 0; i < result.trajectory.length; i++) {
    let log = result.trajectory[i];
    document.getElementById(
      "atual-position"
    ).innerHTML += `<span>Movement ${i}: [Direction=> ${log.direction} || Actual Position=> x:${log.x}, y:${log.y}]</span><br/>`;
  }
});
