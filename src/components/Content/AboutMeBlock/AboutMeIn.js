import React, {Component} from 'react';
import s from '../Content.module.css';
import '../../../fonts/fonts.css'
import aboutMeImg from '../../../img/about-pic.png'

class AboutMeIn extends Component {
    render() {
        return (
            <div className={s.AboutMeDescWrapper}>
                <div className={s.left}>
                    <img src={aboutMeImg} alt=""/>
                </div>
                <div className={s.right}>
                    <div className={s.title}>Why hire me for your next project?</div>
                    <div className={s.desc}>
                        <p>
                            I'm a <span>multi-talented</span> human. Most of my time I design and build digital products.
                            I create <span>responsive websites</span> that allow the user to experience your website in the
                            best and most appropriate way suited to the device they are using.
                        </p>

                        <p>
                            I can quickly and efficiently <span>join your team</span> using continuous-integration
                            with methods and tools such as Git.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMeIn;
