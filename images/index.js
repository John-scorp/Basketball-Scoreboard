let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let highlight = document.getElementsByClassName("score-bg");


let homeResult = 0;
let guestResult = 0;
function addOne() {
    homeResult += 1;
    homeScore.innerText= homeResult;
    highlighter();

}
function addTwo() {
    homeResult += 2;
    homeScore.innerText= homeResult;
    highlighter();

}
function addThree() {
    homeResult += 3;
    homeScore.innerText= homeResult;
    highlighter();

}

function addOneG() {
    guestResult += 1;
    guestScore.innerText= guestResult;
    highlighter();

}
function addTwoG() {
    guestResult += 2;
    guestScore.innerText= guestResult;
    highlighter();

}
function addThreeG() {
    guestResult += 3;
    guestScore.innerText= guestResult;
    highlighter();

}
function clearScore() {
    homeResult = 0;
    guestResult = 0;
    homeScore.innerText= homeResult;
    guestScore.innerText= guestResult;
    highlighter();

}

function highlighter(){
    if (homeResult != guestResult) {
        if(homeResult>guestResult)
        {
            homeScore.innerText= "Win";
            guestScore.innerText= guestResult;
        }
        else{
            guestScore.innerText= "Win";
            homeScore.innerText= homeResult;
        }
    }

}
