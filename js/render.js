function renderProducts(productsArray){
    list.innerHTML = "";

    const statusMessage = document.createElement('p');

    if(isLoading){
        statusMessage.textContent = "Загрузка...";
        list.appendChild(statusMessage);
        return;
    }

    if(loadingError){
        statusMessage.textContent = loadingError;
        list.appendChild(statusMessage);
        return;
    }

    if(productsArray.length === 0){
        statusMessage.textContent = "продуктов не найдено";
        list.appendChild(statusMessage);
        return;
    }

    productsArray.forEach(product => {
        renderProduct(product);
    });
}

function renderProduct(product){
    const clone = Producttemplate.content.cloneNode(true);

    const productEl = clone.querySelector(".product");
    const productName = clone.querySelector(".product__name");
    const productPrice = clone.querySelector(".product__price");
    
    productName.textContent = product.title;
    productPrice.textContent = product.price;
    list.appendChild(clone);

    productEl.addEventListener('click',() =>{
        selectedProduct = product;
        update();
    });
};

function renderModal(){

    const overlay = document.createElement('div');
    
    overlay.classList.add("Modal-overlay");

    const oldModal = document.querySelector(".Modal-overlay");

    if(oldModal){
        oldModal.remove();
    };
    
    const productOverlay = document.createElement('div');
    productOverlay.classList.add("Modal-product");

    const productOverlayHeader = document.createElement('div');
    productOverlayHeader.classList.add("Modal-product__header");

    const productOverlayTitle = document.createElement('p');
    productOverlayTitle.classList.add("Modal-product__title");
    productOverlayTitle.textContent = selectedProduct.title;

    const productOverlayCloseBtn = document.createElement('button');
    productOverlayCloseBtn.classList.add("Modal-product__close-btn");
    productOverlayCloseBtn.textContent = '❌';

    const productOverlayImg = document.createElement('img');
    productOverlayImg.classList.add("Modal-product__img");
    productOverlayImg.src = selectedProduct.image;

    const productOverlayDescription = document.createElement('span');
    productOverlayDescription.classList.add("Modal-product__description");
    productOverlayDescription.textContent = selectedProduct.description;

    const productOverlayPrice = document.createElement('p');
    productOverlayPrice.classList.add("Modal-product__price");
    productOverlayPrice.textContent = selectedProduct.price;

    function closeModal(){
        selectedProduct = null;
        overlay.remove();
        update();
    }

    productOverlayCloseBtn.addEventListener('click',(e) =>{
        e.stopPropagation();
        closeModal();
    });

    overlay.addEventListener('click',(e) => {
        if(e.target === e.currentTarget){
            closeModal();
        }
        
    });

    productOverlayHeader.appendChild(productOverlayTitle);
    productOverlayHeader.appendChild(productOverlayCloseBtn);

    productOverlay.appendChild(productOverlayHeader);
    productOverlay.appendChild(productOverlayImg);
    productOverlay.appendChild(productOverlayDescription);
    productOverlay.appendChild(productOverlayPrice);

    overlay.appendChild(productOverlay);
    document.body.appendChild(overlay);
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