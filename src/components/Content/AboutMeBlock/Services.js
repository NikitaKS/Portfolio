import React, {Component} from 'react';
import s from '../Content.module.css';
import '../../../fonts/fonts.css'
import ServicesItem from "./ServicesItem";

class Services extends Component {
    render() {
        return (
            <div className={s.servicesWrapper}>
                <ServicesItem/>
                <ServicesItem/>
                <ServicesItem/>
                <ServicesItem/>
            </div>
        );
    }
}

export default Services;
