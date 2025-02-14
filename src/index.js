
function displayPoem (response) {

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "";


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
let poemElement = document.querySelector("#poem");

poemElement.innerHTML = "";
let typingEffect =   new Typewriter("#poem", {
    strings: ["Writing Poem..."],
    autoStart: true,
    delay: 100,
    cursor: "",
});

typingEffect.callFunction (() => {
let apiKey = "13c9444ao05d100014e814t7f46bd8da";
let prompt = `User Instructions: Generate a poem about ${instructionsInput.value}`;
let context = "You are a poetry expert. Your mission is to write a short poem maximum 6 lines and separating each line with a </br> following User Instructions.  Do not include a title. sign the poem with 'Nay's AI Corner' inside a <strong> element.";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiURL).then(displayPoem);
    })
.start();
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generatePoem);