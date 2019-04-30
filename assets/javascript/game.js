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


console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);



$("#crystal1").on("click", function(){
    var crystalRandomNumber1 = Math.floor(Math.random()*10 +1);
    console.log(crystalRandomNumber1);
});

$("#crystal2").on("click", function(){
    console.log(crystal2);
    
});

$("#crystal3").on("click", function(){
    var crystalRandomNumber = Math.floor(Math.random()*10 +1);
    crystal3 = crystalRandomNumber;

});

$("#crystal4").on("click", function(){
    var crystalRandomNumber = Math.floor(Math.random()*10 +1);
    crystal4 = crystalRandomNumber;    
});

    // function endGame() {
//     if (totalNumberGuessed == targetRandomNumber) {
//         totalNumberGuessed = 0;
//         wins++;
//       run the 4 randomizing crystal functions         
//     };

//     else if(totalNumberGuessed>targetRandomNumber) {
//         totalNumberGuessed = 0;
//         losses++;
//     };
//  };
    


