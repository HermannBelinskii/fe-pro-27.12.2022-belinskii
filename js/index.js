const cataloge = document.querySelector('.cataloge');
const categoryName = document.querySelector('.category__name');
const categoryDescription = document.querySelector('.category__description')
let lastActive = null;
let lastProductInfo = null;

cataloge.addEventListener('click', (e)=>{
    const targetAction = e.target.dataset.product;
    if(!targetAction) return;
    closeAll();
    addProduct(targetAction);
    if (lastActive) {
        lastActive.classList.remove('action');
    };
    e.target.classList.add('action');
    lastActive = e.target;
});
