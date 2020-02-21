import React from 'react';
import s from './Content.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SocialItem(props) {
    return (
        <a href={props.link} target='_blank' rel='noopener noreferrer'>
            <div className={s.SocialItemWrapper}>
                <div className={s.SocialItemtext}>
                    <div className={s.SocialItemTitle}>{props.title}</div>
                    <div className={s.SocialItemDesc}>{props.desc}</div>
                </div>
                <div className={s.SocialItemIcon}>
                    <FontAwesomeIcon className={s.SocialItemIcon} icon={props.icon} size='3x'/>
                </div>
            </div>
        </a>
    );
}

export default SocialItem;
