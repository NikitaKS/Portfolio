import React from 'react';
import s from './Header.module.css';
import HeaderLogo from "./HeaderLogo";
import {Link, Events, scroller} from 'react-scroll'
import {NavLink} from "react-router-dom";

class Header extends React.Component {

    state = {
        mobileMenu: false
    };

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    componentWillMount() {
        document.addEventListener('click', this.onClickOuterModal, false);
    }


    onClickOuterModal = (event) => {
        const modal = document.getElementById('home');
        if (modal && !modal.contains(event.target)) {
            this.setState({
                mobileMenu: false
            });
        }
    };

    // componentWillUnmount() {
    //     Events.scrollEvent.remove('begin');
    //     Events.scrollEvent.remove('end');
    //     document.removeEventListener('click', this.onClickOuterModal, false);
    // }

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
        let buttonMenu = this.state.mobileMenu === false ? s.buttonMenu : `${s.buttonMenu} ${s.open}`;
        let menu = this.state.mobileMenu === false ? s.Menu : `${s.Menu} ${s.menuActive}`;
        return (
            <div id='home' className={s.header}>
                <div className="container">
                    <div className={s.headerWrapper}>
                        <HeaderLogo/>
                        <div onClick={this.showMenu} className={buttonMenu}>
                            <div className={`${s.lineMenu} ${s.half} ${s.start}`}></div>
                            <div className={s.lineMenu}></div>
                            <div className={`${s.lineMenu} ${s.half} ${s.end}`}></div>
                        </div>
                        <div className={s.MenuWrapper}>
                            <ul className={menu}>
                                <li>
                                    <NavLink onClick={this.showMenu} to="/">Home</NavLink>
                                </li>
                                <li>
                                    <Link onClick={this.showMenu} to="about me"
                                          spy={true} smooth={true} duration={500}>About Me</Link>
                                </li>
                                <li>
                                    <Link onClick={this.showMenu} to="projects" spy={true} smooth={true}
                                          duration={500}>Projects</Link>
                                </li>
                                <li>
                                    <Link onClick={this.showMenu} to="contact" spy={true} smooth={true}
                                          duration={500}>Contact</Link>
                                </li>
                            </ul>
                            <div className={s.MenuButton}>
                                <NavLink to="/contact" className={"MenuButtonIn"}>Let`s Chat</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/*{*/}
                {/*    this.state.mobileMenu &&<div className={s.overlay}></div>*/}
                {/*}*/}
            </div>
        );
    }
}

export default Header;