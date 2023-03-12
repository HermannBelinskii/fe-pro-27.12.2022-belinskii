const cataloge = document.querySelector('.cataloge');
const categoryName = document.querySelector('.category__name');
const categoryDescription = document.querySelector('.category__description')
let lastActive = null;
let lastProductInfo = null;

const actionType = {
    tshirts: () => addProduct('tshirts'),
    sneakers: () => addProduct('sneakers'),
    jeans: () => addProduct('jeans')
};

// const overlay = document.createElement('div');
// overlay.classList.add('overlay');
// document.body.appendChild(overlay);

cataloge.addEventListener('click', (e)=>{
    const targetAction = e.target.dataset.product;
    if(!targetAction) return;
    closeAll();
    actionType[targetAction]();
    if (lastActive) {
        lastActive.classList.remove('action');
    };
    e.target.classList.add('action');
    lastActive = e.target;
});
