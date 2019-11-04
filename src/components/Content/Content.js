import React from 'react';
import s from './Content.module.css';
import HeaderContent from "./HeaderContent";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Social from "./Social";

function Content() {
    return (
        <div className={s.content}>
            <div className="container">
                <div className={s.contentWrapper}>
                    <HeaderContent/>
                    <AboutMe/>
                    <Projects/>
                    <Social/>
                </div>
            </div>
        </div>
    );
}

export default Content;
