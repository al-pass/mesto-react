import '../../index.css'
import { trashbox } from '../../image/images.js'


function Card(props) {

    function handleClick() {
        props.onCardClick(props);
    }

    return (
        <article className="element">
            <img className="element__img button" alt={props.name} src={props.link} onClick={handleClick} />
            <img className="element__trashbox button" alt="Удалить" src={trashbox} />
            <h2 className="element__name">{props.name}</h2>
            <div className="element__likes-box">
                <button className="element__like button" type="button"></button>
                <span className="element__likes-counter">{props.likes.length}</span>
            </div>
        </article>

    )
}

export default Card
