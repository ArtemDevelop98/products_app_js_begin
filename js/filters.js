function getFilteredProducts(){
    let result = [...products];

    if(searchQuery.trim()){
        result = result.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if(currentCategoryFilter !== "all"){
        result = result.filter(product => product.category === currentCategoryFilter);
    }

    if(currentPriceFilter === "cheap"){
        result = result.filter(product => product.price <= 500);
    }else if(currentPriceFilter === "expencive"){
        result = result.filter(product => product.price > 500);
    }

    if(currentSortPrice === "cheapUp"){
        result = result.sort((a,b) => a.price - b.price);
    }else if(currentSortPrice === "cheapDown"){
        result = result.sort((a,b) => b.price - a.price);
    }

    return result;
};