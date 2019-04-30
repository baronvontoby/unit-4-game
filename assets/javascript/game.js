$(document).ready(function() {
    var targetRandomNumber = Math.floor(Math.random()*100 +1);
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

    $("#goal-number").text(targetRandomNumber);
    $("#losses").text(losses);
    $("#wins").text(wins);
    
    
    
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    
    $("#crystal1").on("click", function(){
        totalNumberGuessed = totalNumberGuessed + crystal1;
        console.log(totalNumberGuessed);
    });
    
    $("#crystal2").on("click", function(){
        totalNumberGuessed = totalNumberGuessed + crystal2;
        console.log(totalNumberGuessed);      
    });
    
    $("#crystal3").on("click", function(){
        totalNumberGuessed = totalNumberGuessed + crystal3;
        console.log(totalNumberGuessed);
    });
    
    $("#crystal4").on("click", function(){
        totalNumberGuessed = totalNumberGuessed + crystal4;
        console.log(totalNumberGuessed);   
    });
    
    // $("#total-number").(totalNumberGuessed)
    
    
    if (totalNumberGuessed == targetRandomNumber) {
            totalNumberGuessed = 0;
            wins++;      
        }
        
    else if ( totalNumberGuessed>targetRandomNumber ) {
            totalNumberGuessed = 0;
            losses++;
    };
})
                
                
                
                