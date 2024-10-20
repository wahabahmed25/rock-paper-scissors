
//rock = 3 paper = 2 scissors = 1
//for ai, we randomly generate numbers from 1-3 (for loop)

//handle all rock inputs
//if rock meets rock == draw --> rock === rock
//if rock meets paper == lose --> rock < paper
//if rock meets scissors == win --> rock>scissors

//handling paper inputs
//if paper meets papers == draw --> paper === paper
//if paper meets rock == rule already has been set
//if paper meets scissors == paper < scissors

//handling scissors inputs
//scissors meets scissors == draw --> scissors == scissors
//scissors meets rock == rule already set
//scissors meet paper == rule already been set

//to handle draws simply check if robot == playerInput
//if win add 1 to score board and display you win
//if lose display robot win
//if highscore>score then save score to highscore
const rockInput = document.getElementById("rock")
const paperInput = document.getElementById("paper")
const scissorsInput = document.getElementById("scissors")
const gameInput = document.querySelector("game");
const scoreInput = document.getElementById("score")
const HighScoreInput = document.getElementById("highScore")
const resultDisplay = document.getElementById('resultDisplay'); // Reference to the result display element


//game variables
let score = 0;
let highScore = 0;
let player = 0;
//generates a random number between 1-3 for the robot
let robot = Math.floor(Math.random()*3+1);





//game rules
let gameRule = () =>{
    //simplifasises the conditions needed
    let result = (player - robot +3 )%3; //is 1 player wins, if 2 robot wins, if 0 draw
    //styling results
    resultDisplay.textContent = '';
    resultDisplay.style.color = "black";
    resultDisplay.style.display = "flex";
    resultDisplay.style.flexDirection = "row";
    resultDisplay.style.justifyContent = "center";
    resultDisplay.style.justifyContent = "center";
    resultDisplay.style.fontSize = "25px";






    //conditions to win, lose or draw
    if (result === 1){
        resultDisplay.textContent = "You Win!";
        score +=1;
    }
    else if(result === 2){
        resultDisplay.textContent = "Robot Wins!🤖";
        score = 0;
    }
    else{
        resultDisplay.textContent = "It's a draw!";
    }


    //updates score and highscore on DOM
    scoreInput.textContent=`Score: ${score}`;
    HighScoreInput.textContent = `Highscore: ${updateHighScore()}`;


    rockInput.style.display = "none";
    paperInput.style.display = "none";
    scissorsInput.style.display = "none";




    setTimeout(() => {
        //makes everything disappear for 700 ms to display result and scores ONLY
        resultDisplay.textContent = '';
        resultDisplay.style.display = "none";
    
        rockInput.style.display = "";
        paperInput.style.display = "";
        scissorsInput.style.display = "";
        scoreInput.style.display = "";
        HighScoreInput.style.display = "";
    }, 700);
}


//sets value of rock, paper and scissors once clicked
rockInput.addEventListener('click', ()=>{
    player = 3;
    robot = Math.floor(Math.random()*3+1);
    gameRule();
    
    
    
})
paperInput.addEventListener('click', ()=>{
    player = 2;
    robot = Math.floor(Math.random()*3+1);
    gameRule();

    
})

scissorsInput.addEventListener('click', ()=>{
    player = 1;
    robot = Math.floor(Math.random()*3+1);
    gameRule();
})

//sets highscore
function updateHighScore(){
    if(score>highScore){
        highScore = score;
    }
    return highScore;
}
