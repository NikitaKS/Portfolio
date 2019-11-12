import React from 'react';
import s from './Header.module.css';
import logo from '../../pic/logoNK.png'

function HeaderLogo() {
    return (
        <div className={s.HeaderLogo}>
            <img className={s.logo_img} src={logo} alt=""/>
            <div className={s.logoDesc}>Web Developer</div>
        </div>
    );
}

export default HeaderLogo;
