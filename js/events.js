

const searchInput = document.getElementById("search");

let debounceTimer;

searchInput.addEventListener('input',() => {

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        searchQuery = searchInput.value;
        update();
    },300);

});


function triggerCategoryBtn(){
    const categoryButtons = document.querySelectorAll("[data-category]");
    categoryButtons.forEach(btn => {
        btn.classList.remove("active");
        if(currentCategoryFilter === btn.dataset.category){
            btn.classList.add("active");
        }
    });
}




const priceButtons = document.querySelectorAll("[data-price]");

priceButtons.forEach(btn => {
    btn.addEventListener('click', () =>{
        currentPriceFilter = btn.dataset.price;
        triggerPriceBtn();
        update();
    });
});

function triggerPriceBtn(){
    priceButtons.forEach(btn => {
        btn.classList.remove("active");
        if(currentPriceFilter === btn.dataset.price){
            btn.classList.add("active");
        }
    });
};




const sortPriceButtons = document.querySelectorAll("[data-sort-price]");

sortPriceButtons.forEach(btn => {
    btn.addEventListener('click', () =>{
        currentSortPrice = btn.dataset.sortPrice;
        triggerSortBtn();
        update();
    });
});

function triggerSortBtn(){
    sortPriceButtons.forEach(btn => {
        btn.classList.remove("active");
        if(currentSortPrice === btn.dataset.sortPrice){
            btn.classList.add("active");
        }
    });
};