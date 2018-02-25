 (function() {

     $(document).ready(function() {

         // global variable declarations
         var yourFighter;
         var defender;
         var fighterSelected;
         var defenderSelected;
         var counter;
         var kills;
         var reset;
         var musicPlayer;

         // object containing characters and their key value pairs
         var characters = {
             'morrigan': {
                 name: 'Morrigan',
                 health: 120,
                 attack: 8,
                 image: "assets/images/morrigan.png",
                 defenderCounterAttack: 23
             },
             'alistair': {
                 name: 'Alistair',
                 health: 125,
                 attack: 11,
                 image: "assets/images/alistair.png",
                 defenderCounterAttack: 12
             },
             'varric': {
                 name: 'Varric',
                 health: 150,
                 attack: 8,
                 image: "assets/images/varric.png",
                 defenderCounterAttack: 15
             },
             'cassandra': {
                 name: 'Cassandra',
                 health: 165,
                 attack: 7,
                 image: "assets/images/cassandra.png",
                 defenderCounterAttack: 22
             }
         };

         // function to initialize game
         function initGame() {

             // scroll page to top of screen
             $("body,html").animate({ scrollTop: 0 });

             // set variables to initial state
             fighterSelected = false;
             defenderSelected = false;
             counter = 1;
             kills = 0;
             reset = $("<button class='reset-button'>").text("Reset");
             musicPlayer = $("#musicPlayer");

             // create player modules in the stable
             Object.keys(characters).forEach(key => {
                 var playerStable = $(".player-stable");
                 var playerModule = $("<div class='player-module'>");

                 // add data attribute with the key name for each character
                 playerModule.attr("data-key", key);

                 // create corresponding image, name, and health for each character and give health an id unique to the character
                 var playerImage = $("<img class='character'>").attr("src", characters[key].image);
                 var playerName = $("<h3 class='player-text'>").text(characters[key].name);
                 var playerHealth = $("<p class='player-health'>").attr("id", key).text(characters[key].health);

                 // add characteristics to player module and place each module in the stable
                 playerModule.append(playerImage).append(playerName).append(playerHealth);
                 playerStable.append(playerModule);
             });
         }

         // click function for player modules that are still in the stable
         $(document).on("click", ".player-stable .player-module", function() {

             // if the defender hasn't been selected, allow the fighter and defender to be selected
             if (defenderSelected === false) {

                 // if the fighter has been selected, allow the defender to be selected
                 if (fighterSelected) {

                     // move the defender's player module from the player stable to the defender stage
                     defender = $(this);
                     $(".defender-stage").append(defender);

                     // create attack button
                     var attack = $("<button class='attack-button'>").text("Attack!");
                     $(".attack-reset").append(attack);

                     // update the instructions
                     $(".instructions").text("Enter battle!");

                     // clear the damage display between battles
                     $(".damage-display").empty();

                     // update the outcome display to the initial message
                     $(".outcome-display").text("fight!");

                     // mark defender as selected
                     defenderSelected = true;

                     // move the screen down so that users can access and view the necessary information
                     $("body,html").animate({ scrollTop: 200 }, 1000);

                     var bellRing = new Audio("assets/sounds/bellring.mp3");
                     bellRing.play();

                 } else {

                     // allow the fighter to be selected
                     yourFighter = $(this);

                     // move the fighter's player module from the player stable to the fighter stage
                     $(".fighter-stage").append(yourFighter);

                     // prompt the user to select their opponent
                     $(".instructions").text("Choose your opponent:");

                     var selectSound = new Audio("assets/sounds/select.mp3");
                     selectSound.play();
                     musicPlayer[0].pause();
                     musicPlayer[0].play();

                     // mark fighter as selected
                     fighterSelected = true;
                 }
             }
         });

         // click function for attack functionality
         $(document).on("click", ".attack-button", function() {

             // swords clashing sound plays on every click
             var swordStrike = new Audio("assets/sounds/swordstrike.mp3");
             swordStrike.play();

             // create variables to access fighter's key and attributes
             var fighterName = yourFighter.attr("data-key");
             var fighterAttack = characters[yourFighter.attr("data-key")].attack;

             // create variables to access defender's key and attributes
             var defenderName = defender.attr("data-key");
             var defenderAttack = characters[defender.attr("data-key")].defenderCounterAttack;

             // create variables for damage display messages
             var fighterMessage = ("You attacked " + characters[defender.attr("data-key")].name + " for " + (fighterAttack * counter) + " points damage.");
             var defenderMessage = (characters[defender.attr("data-key")].name + " attacked you for " + defenderAttack + " points damage.");

             // decrease defender's health by attack power, increase attack power with each attack, and add the fighter's damage display
             characters[defender.attr("data-key")].health -= (fighterAttack * counter);
             $(".damage-display").append("<p>").text(fighterMessage);

             // once the defender's health reaches zero, allow a new defender to be selected and reset the defender stage. Remove the attack button and update the outcome display and instructions
             if (characters[defender.attr("data-key")].health < 1) {
                 defenderSelected = false;
                 $(".defender-stage, .attack-reset").empty();
                 $(".outcome-display").text("victory");
                 $(".instructions").text("Choose your next opponent:");

                 var victorySound = new Audio("assets/sounds/victory.mp3");
                 victorySound.play();

                 // update the kill counter by one and scroll page to the top of the screen
                 kills++;
                 $("body,html").animate({ scrollTop: 0 }, 2500);
             } else {
                 // decrease fighter's health by counter attack power, update health display for both opponents, and add damage display for both players
                 characters[yourFighter.attr("data-key")].health -= defenderAttack;
                 $("#" + fighterName).text(characters[yourFighter.attr("data-key")].health);
                 $("#" + defenderName).text(characters[defender.attr("data-key")].health);
                 $(".damage-display").append("<p>").html("" + fighterMessage + "<br /><br />" + defenderMessage + "");
             }

             // inscrease the counter by one to increase the fighter's attack power on each click
             counter++;

             // if fighter's health reaches zero, user has lost the game
             if (characters[yourFighter.attr("data-key")].health < 1) {

                 // set fighter's health to zero to avoic negative numbers in display
                 $("#" + fighterName).text(0);

                 // update instructions and outcome and prompt player to reset game
                 $(".instructions").text("Defeated! Press reset to try again!");
                 $(".outcome-display").text("defeat");

                 // get rid of attack button and clear damage display
                 $(".attack-reset, .damage-display").empty();

                 // create reset button
                 $(".attack-reset").append(reset);
                 $("body,html").animate({ scrollTop: 0 }, 2500);

                 $("#music-holder").empty();

                 var defeatSound = new Audio("assets/sounds/defeat.mp3");
                 defeatSound.play();
             }

             // the user wins when they have defeated all 3 of the other opponents
             if (kills === 3) {

                 // clear the damage display and update the instructions and outcome
                 $(".damage-display").empty();
                 $(".instructions").text("Champion! Press reset to play again!");
                 $(".outcome-display").text("champion");

                 $("#musicSource").attr("src", "http://66.90.93.122/ost/dragon-age-origins/qoyuiknj/34%20%20The%20Coronation.mp3");
                 musicPlayer[0].load();
                 musicPlayer[0].play();


                 // create reset button
                 $(".attack-reset").append(reset);
             }
         });

         // reload page when user clicks reset button
         $(document).on("click", ".reset-button", function() {
             location.reload(true);
         });

         // call function to initialize the game
         initGame();
     });

 })();