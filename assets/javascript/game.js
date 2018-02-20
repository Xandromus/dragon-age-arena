 $(document).ready(function() {

     var yourFighter;
     var defender;
     var fighterSelected;
     var defenderSelected;
     var opponentsReady;
     var counter;
     var kills;

     var characters = {
         'morrigan': {
             name: 'Morrigan',
             health: 120,
             attack: 8,
             image: "assets/images/morrigan.png",
             defenderCounterAttack: 20
         },
         'alistair': {
             name: 'Alistair',
             health: 120,
             attack: 10,
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
             health: 180,
             attack: 9,
             image: "assets/images/cassandra.png",
             defenderCounterAttack: 20
         }
     };

     function initGame() {
         fighterSelected = false;
         defenderSelected = false;
         opponentsReady = false;
         counter = 1;
         kills = 0;

         $(".fighter-stage, .defender-stage, .player-stable, .attack-reset").empty();

         Object.keys(characters).forEach(key => {

             var playerStable = $(".player-stable");
             var playerModule = $("<div class='player-module'>");
             playerModule.attr("data-key", key);
             var playerImage = $("<img class='character'>").attr("src", characters[key].image);
             var playerName = $("<h3 class='player-text'>").text(characters[key].name);
             var playerHealth = $("<p class='player-health'>").attr("id", key).text(characters[key].health);
             playerModule.append(playerImage).append(playerName).append(playerHealth);
             playerStable.append(playerModule);

         });
     }

     $(document).on("click", ".player-stable .player-module", function() {

         if (defenderSelected) {

         } else {

             if (fighterSelected) {

                 defender = $(this);

                 $(".defender-stage").append(defender);
                 var attack = $("<button class='attack-button'>").text("Attack!");
                 $(".instructions").text("Enter Battle!");
                 defenderSelected = true;
                 opponentsReady = true;

                 $(".attack-reset").append(attack);
                 $(".vs").text("VS.");

             } else {
                 yourFighter = $(this);

                 $(".fighter-stage").append(yourFighter);
                 $(".instructions").text("Choose Your Opponent:");
                 fighterSelected = true;
             }

         }

     });



     $(document).on("click", ".attack-button", function() {
         var fighterName = yourFighter.attr("data-key");
         var fighterAttack = characters[yourFighter.attr("data-key")].attack;
         var defenderName = defender.attr("data-key");
         var defenderAttack = characters[defender.attr("data-key")].defenderCounterAttack;

         characters[defender.attr("data-key")].health -= (fighterAttack * counter);

         if (characters[defender.attr("data-key")].health < 1) {
            defenderSelected = false;
            $(".defender-stage, .attack-reset").empty();
            $(".vs").text("VICTORY");
            $(".instructions").text("Choose Your Next Opponent:");
            kills++;
            
} else {
             characters[yourFighter.attr("data-key")].health -= defenderAttack;
             $("#" + fighterName).text(characters[yourFighter.attr("data-key")].health);
             $("#" + defenderName).text(characters[defender.attr("data-key")].health);
            
         }
         counter++;

         if (characters[yourFighter.attr("data-key")].health < 1) {
            $("#" + fighterName).text(0);
            $(".instructions").text("Defeated! Press Reset to try again!");
            $(".vs").text("DEFEAT");
            $(".attack-reset").empty();
            var reset = $("<button class='reset-button'>").text("Reset");
            $(".attack-reset").append(reset);
         }

         if (kills === 3) {
            $(".instructions").text("Champion! Press Reset to play again!");
            $(".vs").text("CHAMPION");
            var reset = $("<button class='reset-button'>").text("Reset");
            $(".attack-reset").append(reset);
         }

     });

     $(document).on("click", ".reset-button", function() {
            location.reload();        
     });


     initGame();
 });