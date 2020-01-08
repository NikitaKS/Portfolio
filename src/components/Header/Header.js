import React from 'react';
import s from './Header.module.css';
import HeaderLogo from "./HeaderLogo";
import {Link, Events, scroller} from 'react-scroll'

class Header extends React.Component {
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

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

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
                                <li><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                                <li><Link to="about me" spy={true} smooth={true} duration={500}>About Me</Link></li>
                                <li><Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
                                <li><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
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