import React from 'react';
import { closeIcon } from '../../image/images.js';


function PopupWithForm(props) {

const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup')) {
        props.onClose();
    }
}

    const popupOpen = props.isOpen;
    return (
            <section className={`popup ${popupOpen ? 'active' : ''}`} id={props.name} onClick={(e) => {handleOverlayClick(e)}}>
                <div className="popup__main-frame form">
                    <button className="button" type="button" onClick={props.onClose}> <img className="popup__close-icon close-icon" alt="Иконка закрытия формы"
                        src={closeIcon} /></button>
                    <h2 className="popup__title">{props.title}</h2>
                    <form name={props.name} id={props.name}>
                        {props.children}
                        <button className="popup__submit form__submit button" type="submit">{props.buttonText}</button>
                    </form>
                </div>
            </section>
    )
}

export default PopupWithForm
