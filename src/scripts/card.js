import { deleteCard, likeCard, dislikeCard } from './api'

export const handleLike = (evt, id) => {
  const likeCount = evt.target.parentNode.querySelector('.card__like-count')
  const handleLikeClick = (res) => {
    evt.target.classList.toggle('card__like-button_is-active')
    likeCount.textContent = res.likes.length
  }

  if (evt.target.classList.contains('card__like-button_is-active')) {
    dislikeCard(id)
      .then(handleLikeClick)
      .catch((err) => console.log(err))
  } else {
    likeCard(id)
      .then(handleLikeClick)
      .catch((err) => console.log(err))
  }
}

export const createCard = (card, userId, onRemove, onLike, onImage) => {
  console.log(card)

  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image')
  const likeButton = cardElement.querySelector('.card__like-button')
  const likeCount = cardElement.querySelector('.card__like-count')
  cardImage.src = card.link
  cardImage.alt = card.name
  likeCount.textContent = card.likes.length
  cardElement.querySelector('.card__title').textContent = card.name

  if (userId === card.owner._id) {
    cardElement
      .querySelector('.card__delete-button')
      .addEventListener('click', onRemove)
  } else {
    cardElement.querySelector('.card__delete-button').remove()
  }

  if (card.isLiked) {
    likeButton.classList.add('card__like-button_is-active')
  }

  likeButton.addEventListener('click', onLike)

  cardImage.addEventListener('click', () => onImage(card))

  return cardElement
}

export const removeCard = (evt, id) => {
  deleteCard(id)
    .then(() => {
      evt.target.closest('.card').remove()
    })
    .catch((err) => console.log(err))
}
