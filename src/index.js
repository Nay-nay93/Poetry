
function generatePoem (event) {
    event.preventDefault();

 new Typewriter("#poem", {
    strings: "Poem will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generatePoem);