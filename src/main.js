import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { refs } from "./refs";
import { getData } from "./api";
import { renderButtonItems, renderCards } from "./template";

getData("products/categories").then(createButtonList).catch(console.log);

function createButtonList(items) {
  const buttonList = renderButtonItems(items);
  refs.listButton.insertAdjacentHTML("beforeend", buttonList);
}

getData("products").then(createCardList).catch(console.log);

function createCardList(products) {
  const cardList = renderCards(products);
  refs.listCard.insertAdjacentHTML("beforeend", cardList);
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
