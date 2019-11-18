import React from 'react';
import s from './Content.module.css';
import HeaderContent from "./HeaderContent";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Social from "./Social";
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'


function Content() {
    let social = [
        {title: 'LinedIn', desc: 'Professional social profile', icon: faLinkedinIn},
        {title: 'Instagram', desc: 'Image base social communications', icon: faInstagram},
        {title: 'Telegramm', desc: '@asdsdsd', icon: faTelegramPlane},
    ];
    return (
        <div className={s.content}>
            <div className="container">
                <div className={s.contentWrapper}>
                    <HeaderContent/>
                    <AboutMe/>
                    <Projects/>
                    <Social social={social}/>
                </div>
            </div>
        </div>
    );
}

export default Content;
