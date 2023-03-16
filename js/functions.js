function closeAll(){
    categoryName.innerHTML = '';
    categoryDescription.innerHTML = '';
};

function overlayDisplay(){
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
}

function removeOverlay() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = 'auto';
    }
}