// Variables to initialize or move pages
const searchBtn = document.getElementById("search-submit");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentPage = 1;

//*Function to get pokemon card data. Change name of pokemon to get a different result. Change pagesize= and a number to get a different number of results (can become a variable later too if we want)
const getCard = async () => {
  let userInput = document.querySelector("#pokemon-name").value;
  let cardEl = document.querySelector(".pokemonCard");
  let currentPageEl = document.querySelector(".pageCount");
  // const apiKey = process.env("X_API_KEY"); 
  cardEl.innerHTML = "";
  try {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards/?q=name:${userInput}&page=${currentPage}&pageSize=9`,
      {
        method: "GET",
        //TODO use variable once server is up and running
        // headers: { "X-API-KEY": X_API_KEY },
      }
    );
    const result = await response.json();
    let cardCount = result.data.length;
    let pageTotal = Math.ceil(result.totalCount / cardCount);
    // Loops through results and returns the desired number of cards
    for (let i = 0; i < result.data.length; i++) {
      cardEl.innerHTML += `<img src ="${result.data[i].images.small}"/>`;
      if (currentPage === 1) {
        prevBtn.disabled = true;
      }
      if (currentPage > 1) {
        prevBtn.disabled = false;
      }
      if (currentPage / pageTotal === 1) {
        nextBtn.disabled = true;
      } else {
        nextBtn.disabled = false;
      }
    }
    currentPageEl.innerHTML = `<h1>Page ${currentPage} of ${pageTotal}</h1>`;
    // console.log(result);
    // console.log(cardCount);
    // console.log(pageTotal);
  } catch (err) {
    console.log(err);
  }
};

searchBtn.addEventListener("click", function () {
  event.preventDefault();
  getCard();
});

nextBtn.addEventListener("click", function () {
  event.preventDefault();
  currentPage++;
  getCard();
});
prevBtn.addEventListener("click", function () {
  event.preventDefault();
  currentPage--;
  getCard();
});
