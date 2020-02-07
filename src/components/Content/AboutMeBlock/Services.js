import React, {Component} from 'react';
import s from '../Content.module.css';
import '../../../fonts/fonts.css'
import ServicesItem from "./ServicesItem";

class Services extends Component {
    state = {
        items: [
            {title:'First Titile',
                text:'Strategy develop customer in organisational knowledge and market perspectives that inform and rovoke.'},
            {title:'Second Titile',
                text:'Strategy develop customer in organisational knowledge and market perspectives that inform and rovoke.'},
            {title:'Third Titile',
                text:'Strategy develop customer in organisational knowledge and market perspectives that inform and rovoke.'},
            {title:'Fouth Titile',
                text:'Strategy develop customer in organisational knowledge and market perspectives that inform and rovoke.'}
        ]
    };

    render() {
        let servicesItems = this.state.items.map((item,index)=>{
            return <ServicesItem title={item.title} text={item.text} key={index}/>
        });
        return (
            <div className={s.servicesWrapper}>
                {servicesItems}
            </div>
        );
    }
}

export default Services;
