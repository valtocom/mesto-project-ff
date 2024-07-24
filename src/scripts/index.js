import '../pages/index.css'
import { createCard, removeCard, handleLike } from './card'
import { openPopup, closePopup, initPopupCloseByClick } from './modal'
import { enableValidation, clearValidation } from './validation.js'
import {
  getInitialCards,
  getUserProfile,
  addNewCard,
  updateUserProfile,
  updateUserAvatar,
} from './api.js'

const editButton = document.querySelector('.profile__edit-button')
const editPopup = document.querySelector('.popup_type_edit')
const formProfile = editPopup.querySelector('.popup__form')
const nameInput = formProfile.querySelector('.popup__input_type_name')
const jobInput = formProfile.querySelector('.popup__input_type_description')
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

const placesList = document.querySelector('.places__list')

const addButton = document.querySelector('.profile__add-button')
const cardPopup = document.querySelector('.popup_type_new-card')
const formCard = cardPopup.querySelector('.popup__form')
const cardNameInput = formCard.querySelector('.popup__input_type_card-name')
const cardUrlInput = formCard.querySelector('.popup__input_type_url')

const imagePopap = document.querySelector('.popup_type_image')
const imageElement = imagePopap.querySelector('.popup__image')
const imageCaption = imagePopap.querySelector('.popup__caption')

const profileAvatar = document.querySelector('.profile__image')
const profileImage = profileAvatar.querySelector('.profile__image-avatar')
const avatarPopup = document.querySelector('.popup_type_avatar')
const formAvatar = avatarPopup.querySelector('.popup__form')
const avatarInput = formAvatar.querySelector('.popup__input_avatar')

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

const promises = [getInitialCards(), getUserProfile()]

const handleAvatarFormSubmit = (evt) => {
  evt.preventDefault()
  const link = avatarInput.value
  updateUserAvatar(link)
    .then((res) => {
      profileImage.src = res.avatar
      closePopup(avatarPopup)
    })
    .catch((err) => console.log(err))
}

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault()
  const name = nameInput.value
  const about = jobInput.value
  updateUserProfile(name, about)
    .then((res) => {
      profileTitle.textContent = res.name
      profileDescription.textContent = res.about
      closePopup(editPopup)
    })
    .catch((err) => console.log(err))
}

const handleCardFormSubmit = (evt) => {
  evt.preventDefault()

  const name = cardNameInput.value
  const link = cardUrlInput.value

  addNewCard(name, link)
    .then((res) => {
      placesList.prepend(
        createCard(
          res,
          res.owner._id,
          (evt) => {
            removeCard(evt, res._id)
          },
          (evt) => {
            handleLike(evt, res._id)
          },
          handleOpenImage,
        ),
      )
      closePopup(cardPopup)
      formCard.reset()
    })
    .catch((err) => console.log(err))
}

export const handleOpenImage = ({ name, link }) => {
  imageElement.src = link
  imageElement.alt = name
  imageCaption.textContent = name
  openPopup(imagePopap)
}

editButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileDescription.textContent
  clearValidation(formProfile, validationConfig)
  openPopup(editPopup)
})

addButton.addEventListener('click', () => {
  formCard.reset()
  clearValidation(formCard, validationConfig)
  openPopup(cardPopup)
})

profileAvatar.addEventListener('click', () => {
  formAvatar.reset()
  clearValidation(formAvatar, validationConfig)
  openPopup(avatarPopup)
})

formAvatar.addEventListener('submit', handleAvatarFormSubmit)
formProfile.addEventListener('submit', handleProfileFormSubmit)
formCard.addEventListener('submit', handleCardFormSubmit)

Promise.all(promises)
  .then((res) => {
    profileTitle.textContent = res[1].name
    profileDescription.textContent = res[1].about
    profileImage.src = res[1].avatar

    res[0].forEach((item) => {
      item.isLiked = item.likes.some((like) => like._id === res[1]._id)
    })

    res[0].forEach((card) =>
      placesList.append(
        createCard(
          card,
          res[1]._id,
          (evt) => {
            removeCard(evt, card._id)
          },
          (evt) => {
            handleLike(evt, card._id)
          },
          handleOpenImage,
        ),
      ),
    )
  })
  .catch((err) => console.log(err))

initPopupCloseByClick(editPopup)
initPopupCloseByClick(cardPopup)
initPopupCloseByClick(imagePopap)
initPopupCloseByClick(avatarPopup)

enableValidation(validationConfig)
