var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (60 - 40 + 1)) + 40;

  return value;
};

var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
  
    // ask player if they'd like to fight or run
   var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
 

   // if player picks "skip" confirm and then stop the loop
   if (promptFight === 'skip' || promptFight === 'SKIP') {
      // if player choses to skip
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + 'has decided to skip this fight. Goodbye!');
         // subtract money from playerInfo.money for skipping
        playerInfo.money = playerInfo.money - 10;
        console.log("playerInfo.money", playerInfo.money);
        
      }
   }
    

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '.' + enemy.names + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
     window.alert(enemy.name + ' has died!');

     playerInfo.money = Math.max(0, playerInfo.money - 10);

    } else {
     window.alert(enemy.name + ' still has '  + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
       window.alert(playerInfo.name + ' has died!');
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  } 
};

var startGame = function() {
  playerInfo.reset();
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;

  for (var i = 0; i <enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
  window.alert('Welcome to Robot Gladiators! Round' + (i +1));

  var pickedEnemyObj = enemyInfo[i];

  enemy.health = Math.floor(Math.random() * 21) + 40;

  pickedEnemyObj.health = randomNumber(40, 60);

  fight(pickedEnemyObj);

   if (playerInfo.health > 0 && i <enemy.names.length - 1) {
      var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

      if (storeConfirm) {

      shop();
      }
 
    }
  }

  else {
    window.alert("You have lost your robot in battle! Game Over!");
  }
  }

  endGame();
};

  var endGame = function() {
    if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }

  else {
    window.alert("You've lost your robot in battle");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?")

   if(playAgainConfirm) {
    startGame();
   } else {
     window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

var shop = function() {
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );

   switch (shopOptionPrompt) {
     case 'REFILL':
     case 'refill':
       playerInfo.refillHealth();
       if (playerInfo.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
     }
     
     else {
         window.alert("You don't have enough money!");
       }

     case 'UPGRADE':
     case 'upgrade':
       playerInfo.upgradeAttack();
       if (playerInfo.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
       
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
    }
       else {
         window.alert("You don't have enough money!");
    }

        case "LEAVE":
        case "leave":
          window.alert('Leaving the store.');

         default:
           window.alert('You did not pick a valid option. Try again.');
           shop();
       
 }

};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
    },
    refillHealth: function() {
      this.health += 20;
      this.money -= 7;
    },
    upgradeAttack: function() {
      this.attack += 6;
      this.money -= 7;
    }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];
 
startGame();
 

 