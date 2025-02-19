const listContainer = document.querySelector(".card_container");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mealType = urlParams.get("mealType");

if (mealType) {
  fetch(`https://dummyjson.com/recipes/meal-type/${mealType}`)
    .then((response) => response.json())
    .then((data) => showList(data.recipes));
} else {
  fetch(`https://dummyjson.com/recipes`)
    .then((response) => response.json())
    .then((data) => showList(data.recipes));
}

function showList(recipes) {
  console.log(recipes);
  let markup = "";
  recipes
    .map((recipe, index) => {
      markup += `
        <div class="card">
          <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Pizza" class="item-img" />
          <div class="item-name">${recipe.name}</div>
        </div>
      
       `;
    })
    .join("");
  listContainer.innerHTML = markup;
}

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then(showRecipe);

function showRecipe(data) {
  // Access the 'recipes' array inside the data object
  const recipes = data.recipes;

  // Create a Set to collect unique meal types
  const mealTypes = new Set();

  // Loop through all recipes and add each mealType to the Set
  recipes.forEach((recipe) => {
    recipe.mealType.forEach((meal) => mealTypes.add(meal));
  });

  // Now generate the markup using only the unique meal types
  const markup = [...mealTypes]
    .map(
      (meal) => `
        <a id="${meal}" href="recipes.html?mealType=${meal}">
          <li >${meal}</li>
        </a>`
    )
    .join("");

  document.querySelector(".category_list").innerHTML = markup; // Update the DOM with the links
}
