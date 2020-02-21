import React, {useState, useEffect} from 'react';
import s from './Footer.module.css';
import HeaderLogo from "../Header/HeaderLogo";
import {NavLink} from "react-router-dom";

function Footer() {
    const [width, setWidth] = useState(window.innerWidth);
    let setCurrentWidth = () => {
        setWidth(window.innerWidth)
    };
    useEffect(() => {
        window.addEventListener('resize', setCurrentWidth);
        return () => {
            window.removeEventListener('resize', setCurrentWidth)
        }
    }, []);
    return (
        <div className={s.footer}>
            <div className='container'>
                <div className={s.footerWrapper}>
                    {
                        width > 767 && <HeaderLogo/>
                    }
                    <div className={s.footerText}>2019 All Rights Reserved</div>
                    <div className={s.FooterButton}>
                        <NavLink to='/contact' className='MenuButtonIn'>Let`s Chat</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
