// Dice Roll
let resultEl = document.getElementById("result-span")
let diceResultEl = document.getElementById("dice-image")



document.getElementById("button").addEventListener("click", roll)

function roll(){
    let roll = Math.random()
    console.log(roll)
    if (roll < 0.16){
        resultEl.innerHTML = "One"
        diceResultEl.src = "img/dice-1.png"
    } else if(roll < 0.32){
        resultEl.innerHTML = "Two"
        diceResultEl.src = "img/dice-2.png"
    } else if(roll < 0.48){
        resultEl.innerHTML = "Three"
        diceResultEl.src = "img/dice-3.png"
    } else if(roll < 0.64){
        resultEl.innerHTML = "Four"
        diceResultEl.src = "img/dice-4.png"
    } else if(roll < 0.80){
        resultEl.innerHTML = "Five"
        diceResultEl.src = "img/dice-5.png"
    } else if (roll < 1){
        resultEl.innerHTML = "Six"
        diceResultEl.src = "img/dice-6.png"
    }
}