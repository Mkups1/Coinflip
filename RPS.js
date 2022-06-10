// Rock, Paper, Scissors

let rockEl = document.getElementById("rock-image")
let paperEl = document.getElementById("paper-image")
let scissorsEl = document.getElementById("scissors-image")
let checkmarkEl = document.getElementById("check")
let pScoreEl = document.getElementById("p-score")
let pScore = 0
let oScoreEl = document.getElementById("o-score")
let oScore = 0
let messageEl = document.getElementById("message")
let start = true
let restartTime = setTimeout(startF, 3000)

function startF(){
    paperEl.style.display="block"
    scissorsEl.style.display="block"
    start = true
    clearTimeout(restartTime)
}


document.getElementById("rock-image").addEventListener("click", rockAns)
document.getElementById("paper-image").addEventListener("click", paperAns)
document.getElementById("scissors-image").addEventListener("click", scissorsAns)

function rockAns(){
    if(start === true){
        let opAns = 1
        opAns = Math.random() * opAns
        console.log(opAns)
        paperEl.style.display="none"
        scissorsEl.style.display="none"
        start = false
        if(opAns <= 0.33){
            checkmarkEl.src = "img/scissors.png"
            pScore++
            pScoreEl.innerHTML = pScore
            messageEl.innerHTML = "You Win!"
        } else if(opAns <= 0.66){
            checkmarkEl.src = "img/paper.png"
            oScore++
            oScoreEl.innerHTML = oScore
         messageEl.innerHTML = "You Lose!"
        } else{
            checkmarkEl.src = "img/rock.png"
            messageEl.innerHTML = "Tie!"
        }
        if(start === false){
            restartTime
        }

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
        messageEl.innerHTML = "You lose!"
    } else if(opAns <= 0.66){
        checkmarkEl.src = "img/paper.png"
        messageEl.innerHTML = "Tie!"
    } else{
        checkmarkEl.src = "img/rock.png"
        pScore++
        pScoreEl.innerHTML = pScore
        messageEl.innerHTML = "You Win!"
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
        messageEl.innerHTML = "Tie!"
    } else if(opAns <= 0.66){
        checkmarkEl.src = "img/paper.png"
        pScore++
        pScoreEl.innerHTML = pScore
        messageEl.innerHTML = "You Win!"
    } else{
        checkmarkEl.src = "img/rock.png"
        oScore++
        oScoreEl.innerHTML = oScore
        messageEl.innerHTML = "You Lose!"
    }


}