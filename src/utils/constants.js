export const configValidationObj = {
    formSelector: '.form',
    inputSelector: '.input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'button_inactive',
}
export const cardElements = '.elements';
//Cards section
export const profileAvatar = document.querySelector('.profile__avatar');
export const editProfilePopup = document.querySelector('#edit-profile');
export const editProfilePopupSubmitButton = editProfilePopup.querySelector('.popup__submit');
export const editNameInput = document.getElementById('inp-name');
export const editDescInput = document.getElementById('inp-desc');
export const existingName = document.querySelector('.profile__profile-info-name');
export const existingDesc = document.querySelector('.profile__profile-info-desc');
export const editProfileOpenButton = document.querySelector('.profile__profile-info-edit-button');
//Переменные необходимые для работы с попапоп редактирующим имя

export const addCardPopup = document.querySelector('#add-card-popup');
export const addCardOpenButton = document.querySelector('.profile__add-button');
export const addCardSubmitButton = addCardPopup.querySelector('.popup__submit');
//Переменные нобходимые для работы с попапом добавляющим карточки

export const hugeImg = document.querySelector('#huge-img');
//Переменные нобходимые для работы с попапом hugeImg

export const removalConfirmationPopup = document.querySelector('#delete-confirmation')

export const avatarEditingPopup = document.querySelector('#change-avatar');
export const avatarEditingPopupSubmitButton = avatarEditingPopup.querySelector('.popup__submit')
export const profileAvatarButton = document.querySelector('.profile__avatar-hover-holder');