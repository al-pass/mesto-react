import React from 'react';
import {
    closeIcon, likeActive, likeDisabled, trashbox, logo,
    addButton, addButtonMain, addButtonMobile,
    avatarHover, avatarHoverPencil, editButton, profileAvatar, cursor
}
    from '../image/images.js';
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import ImagePopup from "./ImagePopup/ImagePopup.js"



function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard(false)
    }

    const [selectedCard, setSelectedCard] = React.useState (false)

    const handeCardClick =(card)=>{
        setSelectedCard(card)
    }
    return (
        <div className="page">
            <div className="page__content">
                <Header />
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handeCardClick}/>
                <Footer />
            </div>
            <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <>
                    <input type="text" name="edit-popup-name" id="inp-name" placeholder="Название" className="popup__input input" minLength="7" maxLength="40" required />
                    <span className="inp-name-error error-messages"></span>
                    <input type="text" name="edit-popup-desc" id="inp-desc" placeholder="Описание" className="popup__input input" minLength="2" maxLength="200" required />
                    <span className="inp-desc-error error-messages"></span>
                    <button className="popup__submit form__submit button" type="submit">Сохранить</button>
                </>
            </PopupWithForm>
            <PopupWithForm name="change-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <>
                <input type="url" name="change-avatar-popup-desc" id="change-avatar-link" placeholder="Cсылка на картинку" required className="popup__input input"/>
                <span className="change-avatar-link-error error-messages"></span>
                <button className="popup__submit form__submit button" type="submit">Изменить</button>
                </>
            </PopupWithForm>
            <PopupWithForm name="add-card-popup" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <>
                <input type="text" name="add-card-popup-name" id="inp-card-name" placeholder="Название" minLength="2" maxLength="30" required className="popup__input input"/>
                <span className="inp-card-name-error error-messages"></span>
                <input type="url" name="add-card-popup-desc" id="inp-card-link" placeholder="Cсылка на картинку" required className="popup__input input"/>
                <span className="inp-card-link-error error-messages"></span>
                <button className="popup__submit form__submit button" type="submit">Создать</button>
                </>
            </PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            {/* <PopupWithForm name="delete-confirmation" title="Вы уверены?" isOpen={isDeleteConfirmationOpen}></PopupWithForm> */}

            <template id="add-card">
                <article className="element">
                    <img className="element__img button" alt="#" src="#" />
                    <img className="element__trashbox button" alt="Удалить" src={trashbox} />
                    <h2 className="element__name"></h2>
                    <div className="element__likes-box">
                        <button className="element__like button" type="button"></button>
                        <span className="element__likes-counter">0</span>
                    </div>
                </article>
            </template>
        </div>
    );
}
export default App;