 $(document).ready(function() {

     var fighterSelected;
     var defenderSelected;
     var opponentsReady;

     function resetGame() {
         fighterSelected = false;
         defenderSelected = false;
         opponentsReady = false;

         $(".fighter-stage, .defender-stage").empty();
     }

     $(".player-module").on("click", function() {

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