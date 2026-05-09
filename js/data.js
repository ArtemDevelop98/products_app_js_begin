let products = [];


async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  
  const data =  await response.json();

  products = data;

renderCategoriesButtons();
  update();
 
}
  loadProducts();