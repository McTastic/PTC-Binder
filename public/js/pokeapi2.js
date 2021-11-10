$(document).ready(function () {
  $(".modal").modal();
});

const getCard = async (pokeID) => {
  const modalCardEl = document.querySelector(".modalCard");
  const pokeModalName = document.querySelector(".pokeModalName");
  const cardDailyAvg = document.querySelector(".cardDailyAvg");
  const cardWeeklyAvg = document.querySelector(".cardWeeklyAvg");
  const cardMonthlyAvg = document.querySelector(".cardMonthlyAvg");
  const cardFlavorText = document.querySelector(".cardFlavorText");
  try {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards/${pokeID}`
    );
    const result = await response.json();
    modalCardEl.innerHTML = `<img class="pokeModal" src ="${result.data.images.large}"/>`;
    pokeModalName.innerHTML = `${result.data.name}`;
    if (result.data.cardmarket.prices.avg1 === null) {
      cardDailyAvg.innerHTML = `<h5>Card Daily Price Average: No daily price availabe for this card`;
    } else {
      cardDailyAvg.innerHTML = `<h5>Card Daily Price Average: $${result.data.cardmarket.prices.avg1}</h5>`;
    }
    if (result.data.cardmarket.prices.avg7 === null) {
      cardWeeklyAvg.innerHTML = `<h5>Card Weekly Price Average: No weekly price availabe for this card`;
    } else {
      cardWeeklyAvg.innerHTML = `<h5>Card Weekly Price Average: $${result.data.cardmarket.prices.avg7}</h5>`;
    }
    if (result.data.cardmarket.prices.avg30 === null) {
      cardMonthlyAvg.innerHTML = `<h5>Card Monthly Price Average: No monthly price availabe for this card`;
    } else {
      cardMonthlyAvg.innerHTML = `<h5>Card Monthly Price Average: $${result.data.cardmarket.prices.avg30}</h5>`;
    }
    if (result.data.flavorText === undefined) {
      cardFlavorText.innerHTML = `<h5>Flavor Text: No text available for this card</h5>`;
    } else {
      cardFlavorText.innerHTML = `<h5>Flavor Text: ${result.data.flavorText}</h5>`;
    }
  } catch (err) {
    console.log(err);
  }
};

$("body").on("click", ".cards", function () {
  $(".modal-trigger").modal();
  event.preventDefault();
  const pokeID = this.id;
  getCard(pokeID);
});
