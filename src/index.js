document.addEventListener("DOMContentLoaded", function () {
  let recipeFormElement = document.querySelector("#recipe-form");
  recipeFormElement.addEventListener("submit", getRecipe);
});

function getRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: ["Preparing your recipe..."],
    autoStart: true,
    delay: NamedNodeMap,
    cursor: "",
  });
}
