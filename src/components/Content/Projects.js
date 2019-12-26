import React from 'react';
import s from './Content.module.css';
import Project from "./Project";
import Slider from 'infinite-react-carousel';

const settings = {
    slidesToShow: 3,
    dots: true,
    duration: 100,
     dotsClass: `${s.carouselDots}`,
    arrows: false,
};
const state = [
    {
        title:'Project Management Admin Panel',
        services:'UI/UX, WEB, HTML, CSS',
        desc:'Discover Business Strategy A thoughtful discovery process',
        img:'https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/dashboard_admin.png'
    },
    {
        title:'Project Management Admin Panel',
        services:'UI/UX, WEB, HTML, CSS',
        desc:'Discover Business Strategy A thoughtful discovery process',
        img:'https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/to-do-list.png'
    },
    {
        title:'Project Management Admin Panel',
        services:'UI/UX, WEB, HTML, CSS',
        desc:'Discover Business Strategy A thoughtful discovery process',
        img:'https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/dashboard_admin.png'
    },
];
function Projects() {
    // let projects = this.state.map(item=>{
    //
    // });
    return (
        <div>
            <div className="container">
                <div className={s.Title}>Projects</div>
                <div className={s.ProjectsWrapper}>
                    <Slider { ...settings }>
                        <div><Project/></div>
                        <div><Project/></div>
                        <div><Project/></div>
                        <div><Project/></div>
                    </Slider>
                </div>
            </div>

        </div>
    );
}

export default Projects;
