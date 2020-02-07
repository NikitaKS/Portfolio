import React from 'react';
import s from './Content.module.css';
import projectLogo from '../../img/projectDef.png'

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.projectImg}>
                <img src={projectLogo} alt=""/>
            </div>
            <div className={s.projectDetails}>
                <div className={s.projectServices}>{props.projectServices}</div>
                <div className={s.projectTitle}>{props.title}</div>
                <div className={s.projectDesc}>{props.text}</div>
            </div>
        </div>
    );
}

export default Project;
