// javascript
let homescore = 0
let guestscore = 0

function addHomeScore(){
    homescore += Number(event.target.textContent.replace('+', ''))
    console.log(homescore)
    document.getElementById("home-score").innerText = homescore
}

/**
 * Increases the guest's score based on the text content of the event target.
 * 
 * This function increments the `guestscore` by extracting the numeric value
 * from the event target's text content. The '+' character is removed before
 * conversion to ensure a proper numeric addition. The updated guest score is
 * then displayed in the element with the ID "guest-score".
 */
function addGuestScore() {
    // Increase guestscore by the numeric value from the event target's text content
    guestscore += Number(event.target.textContent.replace('+', ''));

    // Update the HTML element to display the updated guest score
    document.getElementById("guest-score").innerText = guestscore;
}

/**
 * Resets the scoreboard for both the home and guest scores.
 * 
 * This function sets the global variables `homescore` and `guestscore` to 0
 * and updates the corresponding elements in the HTML document to reflect 
 * these changes. Specifically, it adjusts the text content of the elements 
 * with the IDs "home-score" and "guest-score" to display the reset scores.
 */
function resetScoreboard() {
    // Reset the scores to zero
    homescore = 0;
    guestscore = 0;
    
    // Update the HTML to reflect the reset scores
    document.getElementById("home-score").innerText = homescore;
    document.getElementById("guest-score").innerText = guestscore;
}