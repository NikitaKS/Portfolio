import React from 'react';
import s from './Content.module.css';

function Project(props) {
    return (
        <div className={s.project}>
            <a href={props.link} target='_blank'>
                <div className={s.projectImg}>
                    <img src={props.img} alt=""/>
                </div>
            </a>
            <div className={s.projectDetails}>
                <div className={s.projectServices}>{props.projectServices}</div>
                <div className={s.projectTitle}>{props.title}</div>
                <div className={s.projectDesc}>{props.text}</div>
            </div>

        </div>
    );
}

export default Project;
