import React from 'react';
import { logo }
    from '../../image/images.js';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" alt="Лого сайта Место Россия" src={logo} />
        </header>
    )
}

export default Header;