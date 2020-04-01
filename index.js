function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function numPlayers() {

}

function boardLength() {

}

function luckyNumber() {

}

function diceRoll() {

}

function printBoard() {

}

function printLine(player, pos = 0, bLen = 15, lucky = 5) {

}

function plotPlayer(players) {

}

function advance(playerData, player) {

}

function finished(playerData) {

}

function winner(playerData) {

}

//Uncomment salah satu function untuk membuat obstacle atau power up
// function obstacle(obstaclePosition, player, position) {
//
// }
//
// function powerUp(powerUpPosition, player, position) {
//
// }

function main() {

}
main()

module.exports = {
  main,
  diceRoll,
  numPlayers,
  boardLength,
  printLine,
  printBoard,
  plotPlayer,
  finished,
  winner,
  advance,
  // uncomment line to use obstacle or powerup
  // obstacle,
  // powerUp,
}
