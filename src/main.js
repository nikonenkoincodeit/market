import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { refs } from "./refs";
import { getData } from "./api";
import { renderButtonItems, renderCards } from "./template";

const params = {
  limit: 10,
  skip: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      params.skip += params.limit;
      //   onAddProdactsList();
    }
    // entry.target.style.backgroundColor = intersecting ? "blue" : "orange";
    console.log(intersecting);
  });
});

getData("products/categories").then(createButtonList).catch(console.log);

function createButtonList(items) {
  const buttonList = renderButtonItems(items);
  refs.listButton.insertAdjacentHTML("beforeend", buttonList);
}

function onAddProdactsList() {
  getData(`products?limit=${params.limit}&skip=${params.skip}`)
    .then(createCardList)
    .catch(console.log);
}
onAddProdactsList();

function createCardList(products) {
  const cardList = renderCards(products);
  refs.listCard.insertAdjacentHTML("beforeend", cardList);
  observer.observe(document.querySelector(".card:last-child"));
}

refs.listButton.addEventListener("click", onClickButton);

function onClickButton(event) {
  if (event.target.nodeName != "BUTTON") {
    return;
  }
  const button = event.currentTarget.querySelector(".is-active");
  if (button) {
    button.classList.remove("is-active");
  }
  const value = event.target.dataset.cat;
  event.target.classList.add("is-active");

  refs.listCard.innerHTML = "";
  getData(`products/category/${value}`).then(createCardList).catch(console.log);
}

refs.form.addEventListener("submit", onSumbitForm);

function onSumbitForm(event) {
  event.preventDefault();
  const query = event.currentTarget.search.value.trim();
  if (!query) {
    return;
  }
  refs.listCard.innerHTML = "";
  getData(`products/search?q=${query}`).then(createCardList).catch(console.log);
}
