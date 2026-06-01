let products = [];


async function loadProducts() {

  isLoading = true;

  loadingError = null;

  try{

    const response = await fetch("https://fakestoreapi.com/products");
  
  const data =  await response.json();

  products = data;
  isLoading = false;

  renderCategoriesButtons();
  update();
  
  }catch(error){
    isLoading = false;
    loadingError = error.message;
    update();
  }
 
}
  loadProducts();