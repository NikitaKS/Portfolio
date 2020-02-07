import React, {Component} from 'react';
import s from '../Content.module.css';
import '../../../fonts/fonts.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact,} from '@fortawesome/free-brands-svg-icons'

// faCss3Alt,faHtml5
class ServicesItem extends Component {
    render() {
        return (
            <div className={s.servicesItem}>
                <div className={s.servicesIcon}>
                    <FontAwesomeIcon icon={faReact} size='3x'/>
                </div>
                <div className={s.servicesTitle}>{this.props.title}</div>
                <div className={s.servicesDesc}>{this.props.text}</div>
            </div>
        );
    }
}

export default ServicesItem;
