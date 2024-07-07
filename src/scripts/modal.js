const closeEsc = (evt) => {
    if (evt.key === 'Escape') {
        const showPopap = document.querySelector('.popup_is-opened');
        closePopap(showPopap);
    }
}


export const openPopap = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', closeEsc);
}


export const closePopap = (popup) => {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', closeEsc);
}


export const closeButtonPopup = (popup) => {
    const closeButton = popup.querySelector('.popup__close');
    closeButton.addEventListener('click', function() {closePopap(popup)});

    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup')) {
            closePopap(popup);
        }
    });
}
