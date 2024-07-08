export const handleLike = (evt) => {
    evt.target.classList.toggle('card__like-button_is-active');
}


export const createCard = (card, onRemove, onLike, onImage) => {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const likeButton = cardElement.querySelector('.card__like-button');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', onRemove);
    likeButton.addEventListener('click', onLike);
    cardImage.addEventListener('click', () => onImage(card));
    
    return cardElement;
}


export const removeCard = (evt) => {
    evt.target.closest('.card').remove();
}
