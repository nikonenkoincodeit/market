export function renderButtonItems(items) {
  return items
    .map((item) => {
      return `<li class="item-btn">
            <button type="button" class="btn btn-outline-primary" data-cat="${item}">
              ${item}
            </button>
          </li>`;
    })
    .join("");
}

