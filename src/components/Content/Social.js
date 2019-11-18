import React from 'react';
import s from './Content.module.css';
import SocialItem from "./SocialItem";

function Social(props) {
    let socialitem = props.social.map(item=>{
        return <SocialItem title={item.title} desc={item.desc} icon={item.icon}/>
    });
    return (
        <div>
            <div className="container">
                <div className={s.Title}>Let`s Be Friends?</div>
                <div className={s.SocialWrapper}>
                    {socialitem}
                </div>
            </div>
        </div>
    );
}

export default Social;
