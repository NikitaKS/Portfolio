import React from 'react';
import s from './Content.module.css';


function HeaderContent(props) {
    return (
            <div className={s.headerContent} style={{backgroundImage: `url(${props.background})`,height:props.height}}>
                {
                   props.overlay && <div className={s.backOverlay}></div>
                }
                <div className="container">
                    <div className={s.headerContentIn}>
                        <div className={s.text}>Hello, <br/> <span>My name is Nikita</span><br/><b>Front-end Developer</b>
                        </div>
                        <div className={s.photo}></div>
                    </div>
                </div>
            </div>
    );
}

export default HeaderContent;
