import React, {Component} from 'react';
import s from '../Content.module.css';
import '../../../fonts/fonts.css'

class SkillsItem extends Component {

    render() {
        const percent = this.props.percent + '%';
        return (
            <div className={s.skillItem}>
                <div className={s.skillsTop}>
                    <div className={s.skillTitle}>{this.props.title}</div>
                    <div className={s.skillStatus}>{this.props.percent} %</div>
                </div>
                <div className={s.skillsBottom}>
                    <div className={s.skillProgressBar}>
                        <div style={{width: percent}} className={s.skillProgressBarIn}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsItem;
