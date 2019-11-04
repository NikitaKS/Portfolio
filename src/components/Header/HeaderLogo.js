import React from 'react';
import s from './Header.module.css';

function HeaderLogo() {
    return (
        <div className={s.HeaderLogo}>
            <img className={s.logo_img} src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/09/logo-3.png"
                 alt=""/>
            <div className="logo-desc">
                <span>Nikita</span>
            </div>
        </div>
    );
}

export default HeaderLogo;
