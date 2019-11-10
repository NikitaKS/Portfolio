import React from 'react';
import s from './Content.module.css';

function SocialItem (props) {
    return (
        <div className={s.SocialItemWrapper}>
            <div className={s.SocialItemTitle}>{props.title}</div>
            <div className={s.SocialItemDesc}>{props.desc}</div>
        </div>
    );
}

export default SocialItem;
