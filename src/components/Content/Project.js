import React from 'react';
import s from './Content.module.css';
import projectLogo from '../../img/projectDef.png'

function Project() {
    return (
        <div className={s.project}>
            <div className={s.projectImg}>
                <img src={projectLogo} alt=""/>
            </div>
            <div className={s.projectDetails}>
                <div className={s.projectServices}>UI/UX, WEB, HTML, CSS</div>
                <div className={s.projectTitle}>Project Management Admin Panel</div>
                <div className={s.projectDesc}>Discover Business Strategy A thoughtful discovery process</div>
            </div>
        </div>
    );
}

export default Project;
