const productContainer = document.querySelector(".recipe_container");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get("id");

console.log(userId);

fetch(`https://dummyjson.com/recipes/${userId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched Recipe Data:", data);

    function getRandomCardNumber() {
      return Math.floor(Math.random() * 8) + 1;
    }

    const number = getRandomCardNumber();

    productContainer.innerHTML = `
              <div class="recipe-container">
          <div class="recipe-content">
            <div class="recipe-text">
              <div class="recipe-header">
                <svg class="recipe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 1v2M16 1v2M3 9h18M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  <path d="M12 15l-2 -2l2 -2M14 13l2 2l-2 2" />
                </svg>
                <h1>${data.name}</h1>
              </div>

              <div class="timer timer-mobile">⏱ ${data.prepTimeMinutes + data.cookTimeMinutes} MIN</div>

              <div class="timer timer-desktop">⏱ ${data.prepTimeMinutes + data.cookTimeMinutes}MIN</div>

              <ul class="recipe_list">
                <li class="border">${data.servings}</li>
                <li class="border">Prep ${data.prepTimeMinutes}</li>
                <li class="border">Cook ${data.cookTimeMinutes}</li>
              </ul>
            </div>

            <div class="recipe-image">
              <img src="https://cdn.dummyjson.com/recipe-images/${data.id}.webp" alt="food" />
            </div>
          </div>
        </div>

        <div class="recipe-container">
          <section class="ingredients">
            <h2>Fucking ingredients</h2>
            <ul>
          ${data.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>
          </section>

          <section class="steps">
            <h2>Fucking step-by-step guide for your recipe</h2>
            <p>
          ${data.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
            </p>
          </section>
        </div>


    `;
  });
