import React from 'react';
import s from './Content.module.css';
import SocialItem from "./SocialItem";

function Social(props) {
    let socialitem = props.social.map(item=>{
        return <SocialItem title={item.title} desc={item.desc}/>
    });
    return (
        <div>
            <div className="container">
                <div className={s.SocialWrapper}>
                    <div className={s.SocialTitle}>Let`s Be Friends?</div>
                    {socialitem}
                </div>
            </div>
        </div>
    );
}

export default Social;
