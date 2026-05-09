function renderProducts(productsArray){
    list.innerHTML = "";

    if(productsArray.length === 0){
        const emptyArea = document.createElement('p');

        emptyArea.textContent = "продуктов не найдено";
        list.appendChild(emptyArea);
        return;
    };

    productsArray.forEach(product => {
        renderProduct(product);
    })

};

function renderProduct(product){
    const clone = Producttemplate.content.cloneNode(true);

    const productEl = clone.querySelector(".product");
    const productName = clone.querySelector(".product__name");
    const productPrice = clone.querySelector(".product__price");
    
    productName.textContent = product.title;
    productPrice.textContent = product.price;
    list.appendChild(clone);
};

function renderCategoriesButtons(){
    const categoriesBtnsArea = document.querySelector(".fillters__category__btns");

    categoriesBtnsArea.innerHTML = "";

    const categories = [...new Set( products.map(product =>product.category ))];

    const btnCategoryAll = document.createElement('button');
    btnCategoryAll.textContent = "all";
    btnCategoryAll.dataset.category = "all";
    btnCategoryAll.classList.add("fillters__category__btn");
    btnCategoryAll.addEventListener('click',() => {
        currentCategoryFilter = btnCategoryAll.dataset.category;
        triggerCategoryBtn();
        update();
    });

    categoriesBtnsArea.appendChild(btnCategoryAll);
    

    categories.forEach(btn =>{
        const btnCategory = document.createElement('button');
        btnCategory.textContent = btn;
        btnCategory.dataset.category = btn;
        btnCategory.classList.add("fillters__category__btn");
        btnCategory.addEventListener('click',() => {
        currentCategoryFilter = btnCategory.dataset.category;
        triggerCategoryBtn();
        update();
    });
        categoriesBtnsArea.appendChild(btnCategory);
        
    });

};

const Producttemplate = document.querySelector(".Wrapper-product");
const list = document.querySelector(".list");


renderProducts(products);