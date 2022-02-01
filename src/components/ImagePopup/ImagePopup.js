import { closeIcon } from '../../image/images.js';

function ImagePopup(props) {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup')) {
            props.onClose();
        }
    }

    return (
        <section className={`popup ${props.card.link.length != 0 ? 'active' : ''}`} id="huge-img" onClick={handleOverlayClick}>
            <div className='popup__container'>
                <button className="button" type="button"> <img className="popup__close-icon popup__close-icon_adjusted  close-icon" alt="Иконка закрытия формы"
                    src={closeIcon} onClick={props.onClose} /></button>
                <img className="popup__img" alt={props.card.name} src={props.card.link} />
                <h2 className="popup__name">{props.card.name}</h2>
            </div>
        </section>
    )
}

export default ImagePopup