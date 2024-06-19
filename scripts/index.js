const cardTemplate = document.querySelector('#card-template').content;

const placesList = document.querySelector('.places__list');

initialCards.forEach(createCard);

function createCard(card) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').alt = card.name;
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);
    placesList.append(cardElement);
}

function removeCard(evt) {
    const eventTarget = evt.target;
    const deleteCard = eventTarget.parentElement;
    deleteCard.remove();
}
