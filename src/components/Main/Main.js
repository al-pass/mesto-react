import react from 'react';
import React from 'react';
import { addButton, avatarHoverPencil, editButton }
    from '../../image/images.js';
import api from '../../utils/Api.js';
import Card from '../Card/Card.js';
;


function Main(props) {
    const [userName, changeName] = React.useState('a');
    const [userDescription, changeDescription] = React.useState('b');
    const [userAvatar, changeAvatar] = React.useState('c');
    const [isLoading, setIsLoading] = React.useState(true)
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getProfileInfo()
            .then((res) => {
                changeAvatar(res.avatar);
                changeDescription(res.about)
                changeName(res.name)
            })
            .catch(err => {
                console.log(`Произошла ошибка получение информации профиля:s: ${err}`);
            });
        api.getCards()
            .then((res) => {
                setCards(res)
            })
            .catch(err => {
                console.log(`Произошла ошибка получение карточек:s: ${err}`);
            })
            .finally(() => {
                setIsLoading(false)
            });

    }, [])


    return (
        <main id="main">
            {isLoading && <h1 className="profile__profile-info-name">Прогружаю...</h1>}
            <section className="profile">
                <div className="profile__profile-info">
                    <div className="profile__avatar-div">
                        <img className="profile__avatar " alt="Фотография Аватара" src={userAvatar} />
                        <div className='profile__avatar-hover-holder button' onClick={props.onEditAvatar}>
                            <img className="profile__avatar-hover" alt="Фотография Аватара" src={avatarHoverPencil} />
                        </div>
                    </div>
                    <div className="profile__profile-info-grid">
                        <h1 className="profile__profile-info-name">{userName}</h1>
                        <button className="button" type="button" onClick={props.onEditProfile}><img className="profile__profile-info-edit-button"
                            alt="Изменение описания профиля" src={editButton} /></button>
                        <p className="profile__profile-info-desc">{userDescription}</p>
                    </div>
                </div>
                <button className="button profile__add-button" type="button" onClick={props.onAddPlace}><img className="profile__add-button-cross"
                    src={addButton} alt="Кнопка добавление карточки" /></button>
            </section>
            <section className="elements">
                {cards.map(item => (
                    <Card
                        key={item._id}
                        link={item.link}
                        likes={item.likes}
                        name={item.name}
                        onCardClick={props.onCardClick} />
                )
                )}
            </section>
        </main>
    )
}

export default Main;
