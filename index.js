// javascript
let homescore = 0
let guestscore = 0

function addHomeScore(){
    homescore += Number(event.target.textContent.replace('+', ''))
    console.log(homescore)
    document.getElementById("home-score").innerText = homescore
}

function addGuestScore(){
    guestscore += Number(event.target.textContent.replace('+', ''))
    document.getElementById("guest-score").innerText = guestscore
}

function resetScoreboard(){
    homescore = 0
    guestscore = 0
    document.getElementById("home-score").innerText = homescore
    document.getElementById("guest-score").innerText = guestscore
    
}