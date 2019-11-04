import React from 'react';
import s from './Content.module.css';
import SocialItem from "./SocialItem";

function Social() {
    return (
        <div>
            <div className="container">
                <div className={s.SocialWrapper}>
                    <div className={s.SocialTitle}>Let`s Be Friends?</div>
                    <SocialItem/>
                    <SocialItem/>
                    <SocialItem/>
                    <SocialItem/>
                </div>
            </div>
        </div>
    );
}

export default Social;
