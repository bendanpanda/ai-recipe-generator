function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "a4a3o83044e30bf2e965a940tb084f55";
  let context =
    "You are an experienced AI chef with extensive knowledge of all cuisines. Your goal is to create a recipe in basic HTML and separate each line with a <br />. The recipe has to have a clear title inside an <h1>, brief description of the dish, total cooking time, a list of ingredients with measurements, step-by-step cooking instructions, tips for best results. Make sure to follow the user instructions. At the end sign the recipe with 'SheCodes AI' inside a <strong> element.";
  let prompt = `User instructions: Generate a recipe from ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "generating">⏳ Generating a recipe from ${instructionsInput.value} for you..⌛️</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
