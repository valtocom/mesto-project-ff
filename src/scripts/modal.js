const closeEsc = (evt) => {
    if (evt.key === 'Escape') {
        const showPopap = document.querySelector('.popup_is-opened');
        closePopup(showPopap);
    }
}


export const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', closeEsc);
}


export const closePopup = (popup) => {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', closeEsc);
}


export const initPopupCloseByClick = (popup) => {
    const closeButton = popup.querySelector('.popup__close');
    closeButton.addEventListener('click', function() {closePopup(popup)});

    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup')) {
            closePopup(popup);
        }
    });
}
