import React from 'react';
import s from './Content.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact, faCss3Alt, faHtml5} from '@fortawesome/free-brands-svg-icons'

function Project() {
    return (
        <div className={s.project}>
            <div className={s.projectImg}><img
                src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/to-do-list.png"
                alt=""/></div>
            <div className={s.projectDetails}>
                <div className={s.projectServices}>UI/UX, WEB, HTML, CSS</div>
                <div className={s.projectTitle}>Project Management Admin Panel</div>
                <div className={s.projectDesc}>Discover Business Strategy A thoughtful discovery process</div>
            </div>
        </div>
    );
}

export default Project;
