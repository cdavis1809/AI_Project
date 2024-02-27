document.addEventListener("DOMContentLoaded", function () {
  let recipeFormElement = document.querySelector("#recipe-form");
  recipeFormElement.addEventListener("submit", getRecipe);
});

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: NamedNodeMap,
    cursor: "",
  });
}

function getRecipe(event) {
  event.preventDefault();
  let input = document.querySelector("#user-instructions");
  let apiKey = "406035333ab93t5b036b8515eob03bf5";
  let prompt = `Please find a recipe that is based off ${input.value} cuisine. `;
  let context =
    "You are a world class chef specializing in quick and delicious meals. Generate a meal that will be ready in less than an hour and only requires one pan/pot. Please provide ingredients in a bulleted list with one ingredient per line followed by numbered steps each on a separate line. Please sign 'SheCodes AI' in a <strong></strong> element at the end of the recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}
