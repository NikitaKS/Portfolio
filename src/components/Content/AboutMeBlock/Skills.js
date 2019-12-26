import React, {Component} from 'react';
import s from '../Content.module.css';
import '../../../fonts/fonts.css'
import SkillsItem from "./SkillsItem";

class Skills extends Component {
    state = {
        skillitem: [
            {title: 'javaScript', percent: 65,},
            {title: 'HTML', percent: 100,},
            {title: 'css', percent: 80,},
            {title: 'react', percent: 50,},
            {title: 'redux', percent: 30,},
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
