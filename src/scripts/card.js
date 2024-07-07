import { initialCards } from './cards.js';
import { handleOpenImage } from './index.js';


const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');


const handleLike = (evt) => {
    evt.target.classList.toggle('card__like-button_is-active');
}


initialCards.forEach((card) => placesList.append(createCard(card)));

export function createCard(card) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const likeButton = cardElement.querySelector('.card__like-button');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);
    likeButton.addEventListener('click', handleLike);
    cardImage.addEventListener('click', () => handleOpenImage(card));
    return cardElement;
}


export function removeCard(evt) {
    evt.target.closest('.card').remove();
}
