import React from 'react';
import s from './Header.module.css';
import HeaderLogo from "./HeaderLogo";

class Header extends React.Component {
    state = {
        mobileMenu: false
    };
    showMenu = () => {
        if (!this.state.mobileMenu) {
            this.setState({
                mobileMenu: true
            });
        } else {
            this.setState({
                mobileMenu: false
            });
        }
    };

    render() {
        let buttonMenu = this.state.mobileMenu === false ? s.buttonMenu: `${s.buttonMenu} ${s.open}`;
        let menu = this.state.mobileMenu === false ? s.Menu : `${s.Menu} ${s.menuActive}`;
        return (
            <div className={s.header}>
                <div className="container">
                    <div className={s.headerWrapper}>
                        <HeaderLogo/>
                        <div onClick={this.showMenu} className={buttonMenu}>
                            <div className={`${s.lineMenu} ${s.half} ${s.start}`}> </div>
                            <div className={s.lineMenu}> </div>
                            <div className={`${s.lineMenu} ${s.half} ${s.end}`}> </div>
                        </div>
                        <div className={s.MenuWrapper}>
                            <ul className={menu}>
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


}

export default Header;
