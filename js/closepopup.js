function createPopupWithCloseButton() {
    const popup = document.createElement('div');
    popup.textContent = 'Thanks for shopping!';
    popup.classList.add('popup','visible');
    const closeButton = document.createElement('button');
    closeButton.textContent = 'CLOSE';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popup);
        removeOverlay()
    });
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    closeAll();
    return popup;
};