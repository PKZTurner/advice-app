const diceButton = document.querySelector(".dice");
const adviceText = document.querySelector(".quote");
const adviceID = document.querySelector("#advice");

// add event listener to button
diceButton.addEventListener("click", () => {
  // make a GET request to the advice API
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json()) // convert response to JSON
    .then((data) => {
      // update advice text and number with fetched data
      adviceText.textContent = `"${data.slip.advice}"`; // update advice text
      adviceID.textContent = `ADVICE #${data.slip.id}`; // update advice ID
    })
    .catch((error) => console.log(error)); // log any errors to the console
});
