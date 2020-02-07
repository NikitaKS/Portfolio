import React, {Component} from 'react';
import s from '../Content.module.css';
import '../../../fonts/fonts.css'
import SkillsItem from "./SkillsItem";

class Skills extends Component {
    state = {
        skillitem: [
            {title: 'javaScript', percent: 65,},
            {title: 'HTML', percent: 95,},
            {title: 'css', percent: 80,},
            {title: 'react', percent: 77,},
            {title: 'redux', percent: 70,},
        ]
    };

    render() {
        let skillitems = this.state.skillitem.map(item => {
            return <SkillsItem percent={item.percent} title={item.title}/>
        });
        return (
            <div className={s.skillsWrapper}>
                {skillitems}
            </div>
        );
    }
}

export default Skills;
