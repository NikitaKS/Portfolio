import React from 'react';
import s from './Content.module.css';


function HeaderContent(props) {
    return (
        <div className={s.headerContent} style={{ backgroundImage: `url(${props.background})`}}>
            <div className="container">
                <div className={s.headerContentIn}>
                    <div className={s.text}>Hello, I’m
                        Nikita
                        WebDeveloper
                    </div>
                    <div className={s.photo}></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;
