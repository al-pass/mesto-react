import React from 'react';
import { closeIcon } from '../../image/images.js';


class PopupWithForm extends React.Component {
    constructor(props) {
        super(props)
        this.name = props.name;
        this.title = props.title
        this.props = props
        this.onClose = props.onClose
    }

    _handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup')) {
            this.onClose();
        }
    }

    render() {
        const popupOpen = this.props.isOpen;
        return (
            <div>
                <section className={`popup ${popupOpen ? 'active' : ''}`} id={this.name} onClick={(e) => this._handleOverlayClick(e)}>
                    <div className="popup__main-frame form">
                        <button className="button" type="button" onClick={this.onClose}> <img className="popup__close-icon close-icon" alt="Иконка закрытия формы"
                            src={closeIcon} /></button>
                        <h2 className="popup__title">{this.title}</h2>
                        <form name="popup__form" id={this.name}>
                            {this.props.children}
                        </form>
                    </div>
                </section>

            </div>
        )
    }
}

export default PopupWithForm
