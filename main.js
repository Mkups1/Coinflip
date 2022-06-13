// Coin flip 
let resultEl = document.getElementById("result-span")
let coinResultEl = document.getElementById("coin-result")



document.getElementById("button").addEventListener("click", flip)

function flip(){
    let flip = Math.random()
    console.log(flip)
    if (flip > 0.5){
        resultEl.innerHTML = "Tails"
        coinResultEl.src = "img/Coin-tails.png"
    } else if(flip < 0.5){
        resultEl.innerHTML = "Heads"
        coinResultEl.src = "img/Coin-heads.png"
    } else{
        resultEl.innerHtml = "side"
        coinResultEl.src = "img/Coin-side.png"
    }
}