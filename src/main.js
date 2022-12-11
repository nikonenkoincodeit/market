import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { refs } from "./refs";
import { getData } from "./api";
import { renderButtonItems } from "./template";

getData("products/categories").then(createButtonList).catch(console.log);

function createButtonList(items) {
  const buttonList = renderButtonItems(items);
  refs.list.insertAdjacentHTML("beforeend", buttonList);
}
