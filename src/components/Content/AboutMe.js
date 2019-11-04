import React from 'react';
import s from './Content.module.css';

function AboutMe() {
    return (
        <div className={s.AboutMe}>
                <div className={s.AboutMeWrapper}>
                    <div className={s.AboutMeNav}>
                        <ul className={s.NavMenu}>
                            <li>About Me</li>
                            <li>Skills</li>
                            <li>Service</li>
                            <li>Interview</li>
                            <li>Award</li>
                            <li>Ex</li>
                        </ul>
                    </div>
                    <div className={s.AboutMeDesc}>123</div>
                </div>
        </div>
    );
}

export default AboutMe;
