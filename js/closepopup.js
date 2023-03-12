function createPopupWithCloseButton() {
    const popup = document.createElement('div');
    popup.textContent = 'Thanks for shopping!';
    popup.classList.add('popup','visible');
    const closeButton = document.createElement('button');
    closeButton.textContent = 'CLOSE';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
        document.body.style.overflow = 'auto';
    });
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    return popup;
};