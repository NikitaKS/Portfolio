import React from 'react';
import s from './Footer.module.css';
import HeaderLogo from "../Header/HeaderLogo";

function Footer() {
    return (
        <div className={s.footer}>
            <div className='container'>
                <div className={s.footerWrapper}>
                    <HeaderLogo/>
                    {/*<div className={s.footerText}></div>*/}
                    <div className={s.FooterButton}>
                        <a className={"MenuButtonIn"}  href="#">Let`s Chat</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
