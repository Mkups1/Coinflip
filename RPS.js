// Rock, Paper, Scissors

let rockEl = document.getElementById("rock-image")
let paperEl = document.getElementById("paper-image")
let scissorsEl = document.getElementById("scissors-image")
let checkmarkEl = document.getElementById("check")
let pScoreEl = document.getElementById("p-score")
let pScore = 0
let oScoreEl = document.getElementById("o-score")
let oScore = 0


document.getElementById("rock-image").addEventListener("click", rockAns)
document.getElementById("paper-image").addEventListener("click", paperAns)
document.getElementById("scissors-image").addEventListener("click", scissorsAns)

function rockAns(){
    let opAns = 1
    opAns = Math.random() * opAns
    console.log(opAns)
    paperEl.style.display="none"
    scissorsEl.style.display="none"
    if(opAns <= 0.33){
        checkmarkEl.src = "img/scissors.png"
        pScore++
        pScoreEl.innerHTML = pScore
    } else if(opAns <= 0.66){
        checkmarkEl.src = "img/paper.png"
        oScore++
        oScoreEl.innerHTML = oScore
    } else{
        checkmarkEl.src = "img/rock.png"
    }


}

function paperAns(){
    let opAns = 1
    opAns = Math.random() * opAns
    console.log(opAns)
    rockEl.style.display="none"
    scissorsEl.style.display="none"
    if(opAns <= 0.33){
        checkmarkEl.src = "img/scissors.png"
        oScore++
        oScoreEl.innerHTML = oScore
    } else if(opAns <= 0.66){
        checkmarkEl.src = "img/paper.png"
    } else{
        checkmarkEl.src = "img/rock.png"
        pScore++
        pScoreEl.innerHTML = pScore
    }


}

function scissorsAns(){
    let opAns = 1
    opAns = Math.random() * opAns
    console.log(opAns)
    paperEl.style.display="none"
    rockEl.style.display="none"
    if(opAns <= 0.33){
        checkmarkEl.src = "img/scissors.png"
    } else if(opAns <= 0.66){
        checkmarkEl.src = "img/paper.png"
        pScore++
        pScoreEl.innerHTML = pScore
    } else{
        checkmarkEl.src = "img/rock.png"
        oScore++
        oScoreEl.innerHTML = oScore
    }


}