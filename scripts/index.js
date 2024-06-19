const cardTemplate = document.querySelector('#card-template').content;

const placesList = document.querySelector('.places__list');

initialCards.forEach((card) => placesList.append(createCard(card)));

function createCard(card) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);
    return cardElement;
}

function removeCard(evt) {
    evt.target.closest('.card').remove();
}
