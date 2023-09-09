const myProducts = [];

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then(main);

function saveProducts(products) {
  myProducts.push(...products);
}

function main(json) {
  saveProducts(json.products);
  const productCardTemplate = document.getElementById(
    'product_card_template'
  ).content;
  const productGalery = document.getElementById('product_galery');
  const fragment = document.createDocumentFragment();
  myProducts.forEach((product) => {
    const clone = productCardTemplate.cloneNode(true);
    clone.querySelector('h4').textContent = product.title;
    clone.querySelector('img').src = product.images[0];
    clone.querySelector('.card-text').textContent = product.description;
    clone
      .querySelector('.btn')
      .setAttribute('data-key', `product-${product.id}`);
    clone.querySelector('.btn').setAttribute('data-id', product.id);
    fragment.appendChild(clone);
  });
  productGalery.appendChild(fragment);
}
