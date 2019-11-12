import React from 'react';
import s from './Header.module.css';
import HeaderLogo from "./HeaderLogo";

function Header() {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.headerWrapper}>
                    <HeaderLogo/>
                    <div className={s.MenuWrapper}>
                        <ul className={s.Menu}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Price</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className={s.MenuButton}>
                            <a className={"MenuButtonIn"} href="#">Let`s Chat</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
