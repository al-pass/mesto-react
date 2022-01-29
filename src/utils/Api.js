class Api {
    constructor({ baseUrl, headers }) {
        this._url = baseUrl;
        this._headers = headers;
    }

    getProfileInfo = () => {
        return fetch(`${this._url}/users/me`, {
                method: 'GET',
                headers: this._headers
            })
            .then(res => {
                return this._jsonRequest(res);
            })
    }

    getCards = () => {
        return fetch(`${this._url}/cards`, {
                method: 'GET',
                headers: this._headers
            })
            .then(res => {
                return this._jsonRequest(res);
            })
    }

    addNewCard = (values) => {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: values[0],
                    link: values[1],
                })
            })
            .then(res => {
                return this._jsonRequest(res);
            })
    }

    changeAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: `${link}`,
                })
            })
            .then(res => {
                return this._jsonRequest(res);
            })
    }


    editProfileInfo(values) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: `${values[0]}`,
                    about: `${values[1]}`
                })
            })
            .then(res => {
                return this._jsonRequest(res);
            })
    }

    removeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(res => {
                return this._jsonRequest(res);
            })
    }

    deleteLike = (cardId) => {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-29/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: {
                    authorization: 'ccfde452-ebef-4dda-a84e-d1a61e032f57',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                return this._jsonRequest(res)
            })
    }

    addLike = (cardId) => {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-29/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: {
                    authorization: 'ccfde452-ebef-4dda-a84e-d1a61e032f57',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                return this._jsonRequest(res)
            })
    }

    _jsonRequest(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Произошла ошибка: ${res.status}`)
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
    headers: {
        'Content-Type': 'application/json',
        authorization: 'ccfde452-ebef-4dda-a84e-d1a61e032f57'
    }
});

export default api