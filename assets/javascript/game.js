$(document).ready(function() {
    var targetRandomNumber = Math.floor(Math.random()*50 +1);
    var crystalRandomNumber1 = Math.floor(Math.random()*10 +1);
    var crystalRandomNumber2 = Math.floor(Math.random()*10 +1);
    var crystalRandomNumber3 = Math.floor(Math.random()*10 +1);
    var crystalRandomNumber4 = Math.floor(Math.random()*10 +1);
    var wins = 0;
    var losses = 0;
    var totalNumberGuessed = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    
    crystal1 = crystalRandomNumber1;
    crystal2 = crystalRandomNumber2;
    crystal3 = crystalRandomNumber3;
    crystal4 = crystalRandomNumber4;
    
    $("#goal-number").html(targetRandomNumber);
    $("#losses").html(losses);
    $("#wins").html(wins);
    $("#total-number").html(totalNumberGuessed)
    
    
    
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    
    $("#crystal1").on("click", function(){
        totalNumberGuessed = totalNumberGuessed + crystal1;
        $("#total-number").html(totalNumberGuessed);
        console.log(totalNumberGuessed);
        game();
        rando();
    });
    
    $("#crystal2").on("click", function(){
        totalNumberGuessed = totalNumberGuessed + crystal2;
        $("#total-number").html(totalNumberGuessed);
        console.log(totalNumberGuessed);
        game();
        ranod();      
    });
    
    $("#crystal3").on("click", function(){
        totalNumberGuessed = totalNumberGuessed + crystal3;
        $("#total-number").html(totalNumberGuessed);
        console.log(totalNumberGuessed);
        game();
        rando();
    });
    
    $("#crystal4").on("click", function(){
        totalNumberGuessed = totalNumberGuessed + crystal4;
        $("#total-number").html(totalNumberGuessed);
        console.log(totalNumberGuessed);  
        game();
        rando(); 
    });
    
    
    
var game = function () {
    
        if (totalNumberGuessed == targetRandomNumber) {
            totalNumberGuessed = 0;
            wins++;
            $("#wins").html(wins);
            $("#total-number").html(totalNumberGuessed);
            randomizer();  
        }
        
        else if ( totalNumberGuessed>targetRandomNumber ) {
            totalNumberGuessed = 0;
            losses++;
            $("#losses").html(losses);
            $("#total-number").html(totalNumberGuessed);
            randomizer();
        }
    };

function rando () {
    if (totalNumberGuessed == 0) {
        targetRandomNumber = Math.floor(Math.random()*50 + 1); 
        $("#goal-number").html(targetRandomNumber);     
    }
}
var randomizer = function () {
var crystalRandomNumber1 = Math.floor(Math.random()*10 +1);
var crystalRandomNumber2 = Math.floor(Math.random()*10 +1);
var crystalRandomNumber3 = Math.floor(Math.random()*10 +1);
var crystalRandomNumber4 = Math.floor(Math.random()*10 +1);
crystal1 = crystalRandomNumber1;
crystal2 = crystalRandomNumber2;
crystal3 = crystalRandomNumber3;
crystal4 = crystalRandomNumber4;

}

// var rando = function () {
//     if () {
//     var targetRandomNumber = Math.floor(Math.random()*50 +1);
//     $("#goal-number").html(targetRandomNumber)
//     }
// };
})
                
                
                
                