import React from 'react';
import s from './Footer.module.css';
import HeaderLogo from "../Header/HeaderLogo";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <div className={s.footer}>
            <div className='container'>
                <div className={s.footerWrapper}>
                    <HeaderLogo/>
                    {/*<div className={s.footerText}></div>*/}
                    <div className={s.FooterButton}>
                        <NavLink to='/contact' className='MenuButtonIn'>Let`s Chat</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
