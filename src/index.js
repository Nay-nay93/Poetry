
function displayPoem (response) {

    let poemElement = document.querySelector("#poem");

     new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem (event) {
    event.preventDefault();

let instructionsInput = document.querySelector("#instructions");
let apiKey = "13c9444ao05d100014e814t7f46bd8da";
let prompt = `User Instructions: Generate a poem about ${instructionsInput.value}`;
let context = "You are a poetry expert. Your mission is to write a short poem maximum 6 lines and separating each line with a </br> following User Instructions.  Do not include a title. Sign the poem with 'Nay's AI Corner' inside a <strong> element.";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="loading">Generating a poem about ${instructionsInput.value}</div>`;

axios.get(apiURL).then(displayPoem);
    
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generatePoem);