var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i <enemyNames.length; i++) {
    if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators! Round" + (i +1));

  var pickedenemyName = enemyNames[i];

  enemyHealth = 50;

  fight(pickedenemyName);
 
  }


  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }

  var endGame = function() {
    if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }

  else {
    window.alert("You've lost your robot in battle");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?")

   if(playAgainConfirm) {
    startGame();
   }

   else {
     window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }

  endGame();
};

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + "index");
}

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

   // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
  } else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  window.alert(playerName + " has chosen to skip the fight!");


    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }


// run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
startGame();
  }
}
