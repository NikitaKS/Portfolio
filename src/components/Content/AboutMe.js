import React, {Component} from 'react';
import s from './Content.module.css';
import '../../fonts/fonts.css';
import AboutMeIn from "./AboutMeBlock/AboutMeIn";
import Skills from "./AboutMeBlock/Skills";
import Awards from "./AboutMeBlock/Awards";
import Services from "./AboutMeBlock/Services";

class AboutMe extends Component {
    state = {
        isAboutMe: true,
        isSkills: false,
        isServices: false,
        isAward: false,
    };

    onClickButton(title) {
        switch (title) {
            case ('About Me'):
                return this.setState({isAboutMe: true, isSkills: false, isServices: false, isAward: false});
            case ('Skills'):
                return this.setState({isAboutMe: false, isSkills: true, isServices: false, isAward: false});
            case ('Services'):
                return this.setState({isAboutMe: false, isSkills: false, isServices: true, isAward: false});
            case ('Awards'):
                return this.setState({isAboutMe: false, isSkills: false, isServices: false, isAward: true});
        }
    };

    render() {

        return (
            <div className={s.AboutMe}>
                <div className={"container"}>
                    <div className={s.AboutMeWrapper}>
                        <div className={s.AboutMeNav}>
                            <ul className={s.NavMenu}>
                                <li className={this.state.isAboutMe && s.activeBtn}
                                    onClick={() => this.onClickButton('About Me')}>About Me
                                </li>
                                <li className={this.state.isSkills && s.activeBtn}
                                    onClick={() => this.onClickButton('Skills')}>Skills
                                </li>
                                <li className={this.state.isServices && s.activeBtn}
                                    onClick={() => this.onClickButton('Services')}>Services
                                </li>
                                {/*<li onClick={() => this.onClickButton('Awards')}>Awards</li>*/}
                            </ul>
                        </div>
                        {this.state.isAboutMe && <AboutMeIn/>}
                        {this.state.isSkills && <Skills/>}
                        {this.state.isServices && <Services/>}
                        {this.state.isAward && <Awards/>}

                    </div>
                </div>
            </div>

        );
    }
}

export default AboutMe;

