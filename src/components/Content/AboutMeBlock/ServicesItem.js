import React, {Component} from 'react';
import s from '../Content.module.css';
import '../../../fonts/fonts.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact,faCss3Alt,faHtml5} from '@fortawesome/free-brands-svg-icons'

class ServicesItem extends Component {
    render() {
        return (
            <div className={s.servicesItem}>
                <div className={s.servicesIcon}>
                    <FontAwesomeIcon icon={faReact} size='3x'/>
                </div>
                <div className={s.servicesTitle}>
                    Business Strategy
                </div>
                <div className={s.servicesDesc}>
                    Strategy develop customer in organisational knowledge and market perspectives that inform and
                    provoke.
                </div>
            </div>
        );
    }
}

export default ServicesItem;
