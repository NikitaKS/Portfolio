import React from 'react';
import s from './Content.module.css';
import HeaderContent from "./HeaderContent";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Social from "./Social";

function Content() {
    let social = [
        {title: 'LinedIn', desc: 'Professional social profile'},
        {title: 'Instagram', desc: 'Image base social communications'},
        {title: 'VK', desc: 'Social profile'},
        {title: 'EMail', desc: 'asd@asd.com'},
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
