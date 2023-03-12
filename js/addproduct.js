function addProduct(productType) {
    const catalogOfProducts = document.createElement('div');
    catalogOfProducts.classList.add('products');
    categoryName.appendChild(catalogOfProducts);
    products[productType].forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productName = document.createElement('h3');
        productName.innerText = product.name;
        productCard.appendChild(productName);
        catalogOfProducts.appendChild(productCard);
        productCard.addEventListener('click', ()=>{
            if (lastProductInfo) lastProductInfo.remove();
            const productInfo = document.createElement('div');
            productInfo.classList.toggle('product-info');
            const productPrice = document.createElement('p');
            productPrice.innerText = `MODEL: ${product.name} \n PRICE: ${product.price} UAH`;
            const productDescription = document.createElement('p');
            productDescription.innerText = `DESCRIPTION: ${product.description}`;
            const buyBtn = document.createElement('button');
            buyBtn.innerText = 'Buy it NOW!';
            productInfo.appendChild(productPrice);
            productInfo.appendChild(productDescription);
            categoryDescription.appendChild(productInfo);
            productInfo.appendChild(buyBtn);
            buyBtn.addEventListener('click', () => {
                createPopupWithCloseButton();
                closeAll()
            });
            lastProductInfo = productInfo;
        })
    });
};