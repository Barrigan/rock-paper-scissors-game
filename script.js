document.addEventListener("keydown", function (event) {
  console.log("Pressed key: ", event);
  if (event.key == "1") {
    document.getElementById("selectedOption").innerHTML = "Rock";
  } else if (event.key == "2") {
    document.getElementById("selectedOption").innerHTML = "Scissors";
  } else if (event.key == "3") {
    document.getElementById("selectedOption").innerHTML = "Paper";
  }
});

function machineSelectsAnOption() {
  let randomNumber = 0;
  while (randomNumber < 1 || randomNumber > 3) {
    randomNumber = Math.floor(Math.random() * 10);
  }
  console.log("machines random number: ", randomNumber);
  return randomNumber;
}

function playGame() {
  if (
    document.getElementById("selectedOption").innerHTML == null ||
    document.getElementById("selectedOption").innerHTML == ""
  ) {
    document.getElementById("result").innerHTML =
      "Before playing you must select your own option";
    document.getElementById("selectedOption").innerHTML = "";
    document.getElementById("machinesOption").innerHTML = "";
  } else {
    let yourGame = document.getElementById("selectedOption").innerHTML;
    let machinesGame = machineSelectsAnOption();
    document.getElementById("machinesOption").innerHTML =
      machinesGame == 1 ? "Rock" : machinesGame == 2 ? "Scissors" : "Paper";
    //isMember ? '$2.00' : '$10.00')
    machinesGame = document.getElementById("machinesOption").innerHTML;
    console.log("yourGame: ", yourGame);
    console.log("machinesGame: ", machinesGame);

    if (yourGame == machinesGame) {
      console.log("llega");
      document.getElementById("result").innerHTML =
        "Your Game: " +
        yourGame +
        "<br>Machine's Game: " +
        machinesGame +
        "<br>Even!";
    } else if (
      (yourGame == "Rock" && machinesGame == "Scissors") ||
      (yourGame == "Scissors" && machinesGame == "Paper") ||
      (yourGame == "Paper" && machinesGame == "Rock")
    ) {
      console.log("llega2");
      document.getElementById("result").innerHTML =
        "Your Game: " +
        yourGame +
        "<br>Machine's Game: " +
        machinesGame +
        "<br>You win!";
      document.getElementById("yourCounter").innerHTML =
        Number(document.getElementById("yourCounter").innerHTML) + 1;
    } else if (
      (yourGame == "Scissors" && machinesGame == "Rock") ||
      (yourGame == "Paper" && machinesGame == "Scissors") ||
      (yourGame == "Rock" && machinesGame == "Paper")
    ) {
      console.log("llega3");
      document.getElementById("result").innerHTML =
        "Your Game: " +
        yourGame +
        "<br>Machine's Game: " +
        machinesGame +
        "<br>You lose!!";
      document.getElementById("machineCounter").innerHTML =
        Number(document.getElementById("machineCounter").innerHTML) + 1;
    }
    document.getElementById("selectedOption").innerHTML = "";
    document.getElementById("machinesOption").innerHTML = "";
  }
}
