function update(){
    const filteredProducts = getFilteredProducts();
    renderProducts(filteredProducts);

    if(selectedProduct){
        renderModal();
    }
}