import '../pages/index.css';
import { initialCards } from './cards.js';
import { createCard, removeCard, handleLike } from './card';
import {openPopup, closePopup, initPopupCloseByClick} from './modal';


const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const formProfile = editPopup.querySelector('.popup__form');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const placesList = document.querySelector('.places__list');

const addButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_new-card');
const formCard = cardPopup.querySelector('.popup__form');
const cardNameInput = formCard.querySelector('.popup__input_type_card-name');
const cardUrlInput = formCard.querySelector('.popup__input_type_url');

const imagePopap = document.querySelector('.popup_type_image');
const imageElement = imagePopap.querySelector('.popup__image');
const imageCaption = imagePopap.querySelector('.popup__caption');


editButton.addEventListener('click', () => {
    jobInput.value = profileTitle.textContent;
    nameInput.value = profileDescription.textContent;
    openPopup(editPopup);
});

addButton.addEventListener('click', () => {
    openPopup(cardPopup);
});


const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    profileTitle.textContent = jobInput.value;
    profileDescription.textContent = nameInput.value;
    closePopup(editPopup);
}

formProfile.addEventListener('submit', handleProfileFormSubmit);


const handleCardFormSubmit = (evt) => {
    evt.preventDefault();

    placesList.prepend(
      createCard(
        {
          name: cardNameInput.value,
          link: cardUrlInput.value
        }
      )
    );

    closePopup(cardPopup);
    formCard.reset();
  };

formCard.addEventListener('submit', handleCardFormSubmit);


export const handleOpenImage = ({ name, link }) => {
    imageElement.src = link;
    imageElement.alt = name;
    imageCaption.textContent = name;
    openPopup(imagePopap);
  };


initialCards.forEach((card) => placesList.append(
  createCard(card, removeCard, handleLike, handleOpenImage)
));


initPopupCloseByClick(editPopup);
initPopupCloseByClick(cardPopup);
initPopupCloseByClick(imagePopap);
