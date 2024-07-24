const config = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-magistr-2',
  headers: {
    authorization: 'c3d38577-06fb-4e73-82a8-b6ea7e900667',
    'Content-Type': 'application/json',
  },
}

export const apiRequest = (url, method, body) => {
  return fetch(`${config.baseUrl}/${url}`, {
    method,
    headers: config.headers,
    body,
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  })
}

export const getInitialCards = () => {
  return apiRequest('cards', 'GET')
}

export const addNewCard = (name, link) => {
  return apiRequest('cards', 'POST', JSON.stringify({ name, link }))
}

export const deleteCard = (id) => {
  return apiRequest(`cards/${id}`, 'DELETE')
}

export const getUserProfile = () => {
  return apiRequest('users/me', 'GET')
}

export const updateUserProfile = (name, about) =>
  apiRequest('users/me', 'PATCH', JSON.stringify({ name, about }))

export const updateUserAvatar = (avatar) =>
  apiRequest('users/me/avatar', 'PATCH', JSON.stringify({ avatar }))

export const likeCard = (id) => apiRequest(`cards/likes/${id}`, 'PUT')

export const dislikeCard = (id) => apiRequest(`cards/likes/${id}`, 'DELETE')
