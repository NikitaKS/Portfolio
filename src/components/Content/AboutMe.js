import React, {Component} from 'react';
import s from './Content.module.css';
import '../../fonts/fonts.css';
import AboutMeIn from "./AboutMeBlock/AboutMeIn";
import Skills from "./AboutMeBlock/Skills";

class AboutMe extends Component {
    state = {
        buttonValue: ''
    };
    onClickButton = (e) => {
        this.setState({
            buttonValue: e.currentTarget.innerHTML
        })
    };

    render() {
        if(this.state.buttonValue === 'Skills') {
            return <Skills/>
        }


        return (
            <div className={s.AboutMe}>
                <div className={"container"}>
                    <div className={s.AboutMeWrapper}>
                        <div className={s.AboutMeNav}>
                            <ul className={s.NavMenu}>
                                <li onClick={this.onClickButton}>About Me</li>
                                <li onClick={this.onClickButton}>Skills</li>
                                <li onClick={this.onClickButton}>Service</li>
                                <li onClick={this.onClickButton}>Interview</li>
                                <li onClick={this.onClickButton}>Award</li>
                                <li onClick={this.onClickButton}>Ex</li>
                            </ul>
                        </div>

                        <div className={s.AboutMeWrapper}>

                            <AboutMeIn/>
                            <Skills/>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
