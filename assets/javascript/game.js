 $(document).ready(function() {

     var fighterSelected;
     var defenderSelected;
     var opponentsReady;

     var characters = {
         'morrigan': {
             name: 'Morrigan',
             health: 120,
             attack: 8,
             image: "assets/images/morrigan.png",
             enemyCounterAttack: 20
         },
         'alistair': {
             name: 'Alistair',
             health: 120,
             attack: 15,
             image: "assets/images/alistair.png",
             enemyCounterAttack: 10
         },
         'varric': {
             name: 'Varric',
             health: 150,
             attack: 8,
             image: "assets/images/varric.png",
             enemyCounterAttack: 15
         },
         'cassandra': {
             name: 'Cassandra',
             health: 180,
             attack: 10,
             image: "assets/images/cassandra.png",
             enemyCounterAttack: 20
         }
     };

     function resetGame() {
         fighterSelected = false;
         defenderSelected = false;
         opponentsReady = false;

         $(".fighter-stage, .defender-stage, .player-stable").empty();

         Object.keys(characters).forEach(key => {

             var playerStable = $(".player-stable");
             var playerModule = $("<div class='player-module'>");
             var playerImage = $("<img class='character'>").attr("src", characters[key].image);
             var playerName = $("<h3 class='player-text'>").text(characters[key].name);
             var playerHealth = $("<p class='player-health'>").text(characters[key].health);
             playerModule.append(playerImage).append(playerName).append(playerHealth);
             playerStable.append(playerModule);

         });
     }

     $(document).on("click", ".player-module", function() {

         if (defenderSelected) {

         } else {

             if (fighterSelected) {

                 var defender = $(this);

                 $(".defender-stage").append(defender);
                 var attack = $("<button class='attack-button'>").text("Attack!");
                 $(".instructions").text("Enter Battle!");
                 defenderSelected = true;

                 $(".attack").append(attack);

             } else {
                 var yourFighter = $(this);

                 $(".fighter-stage").append(yourFighter);
                 $(".instructions").text("Choose Your Opponent:");
                 fighterSelected = true;
             }

         }

     });

     if (defenderSelected) {
         var attack = $("<button>");

         $(".attack").append(attack);
         $(this).text("Attack!")
     }


     resetGame();
     console.log(fighterSelected);

 });