import React from 'react';
import s from './Content.module.css';
import HeaderContent from "./HeaderContent";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Social from "./Social";
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {Route} from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";
import headerImg from '../../img/HeaderBack.png';
import contactImg from '../../img/contactFormBack.jpg';


function Content() {
    let social = [
        {id: 0, title: 'LinkedIn', desc: 'Professional social profile', icon: faLinkedinIn},
        {id: 1, title: 'Instagram', desc: 'Image base social communications', icon: faInstagram},
        {id: 2, title: 'Telegram', desc: '@asdsdsd', icon: faTelegramPlane},
    ];
    return (
        <div className={s.content}>
            <div className={s.contentWrapper}>
                <Route path='/contact'>
                    <HeaderContent background={contactImg}/>
                    <ContactForm/>
                </Route>
                <Route exact path='/' >
                    <HeaderContent background={headerImg}/>
                    <AboutMe/>
                    <Projects/>
                </Route>
                <Social social={social}/>
            </div>
        </div>
    );
}

export default Content;
