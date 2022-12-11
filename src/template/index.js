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

export function renderCards(items) {
  return items.products
    .map(({ id, thumbnail, title, description, price }) => {
      return `<li class="card" data-id="${id}">
              <img
                src="${thumbnail}"
                class="card-img-top"
                alt="${title}"
                height="180"
                width="200"
              />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                  ${description}
                </p>
                <div class="tile__price tile__price_color_red ng-star-inserted">
                  <span class="tile__price-value"> ${price}</span
                  ><span class="tile__price-currency">₴</span>
                </div>
              </div>
            </li>`;
    })
    .join("");
}
// brand: "Apple";
// category: "smartphones";
// description: "An apple mobile which is nothing like apple";
// discountPercentage: 12.96;
// id: 1;
// images: (5)[
//   ("https://i.dummyjson.com/data/products/1/1.jpg",
//   "https://i.dummyjson.com/data/products/1/2.jpg",
//   "https://i.dummyjson.com/data/products/1/3.jpg",
//   "https://i.dummyjson.com/data/products/1/4.jpg",
//   "https://i.dummyjson.com/data/products/1/thumbnail.jpg")
// ];
// price: 549;
// rating: 4.69;
// stock: 94;
// thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg";
// title: "iPhone 9";
