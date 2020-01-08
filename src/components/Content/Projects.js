import React from 'react';
import s from './Content.module.css';
import Project from "./Project";
import Slider from 'infinite-react-carousel';
import './Slider.css';

// const state = [
//     {
//         title: 'Project Management Admin Panel',
//         services: 'UI/UX, WEB, HTML, CSS',
//         desc: 'Discover Business Strategy A thoughtful discovery process',
//         img: 'https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/dashboard_admin.png'
//     },
//     {
//         title: 'Project Management Admin Panel',
//         services: 'UI/UX, WEB, HTML, CSS',
//         desc: 'Discover Business Strategy A thoughtful discovery process',
//         img: 'https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/to-do-list.png'
//     },
//     {
//         title: 'Project Management Admin Panel',
//         services: 'UI/UX, WEB, HTML, CSS',
//         desc: 'Discover Business Strategy A thoughtful discovery process',
//         img: 'https://spaceraceit.com/wp/growth/wp-content/uploads/2019/06/dashboard_admin.png'
//     },
// ];

class Projects extends React.Component {

    state = {
        settings: {
            slidesToShow: 3,
            dots: true,
            duration: 100,
            arrows: false,
        },
        width: window.innerWidth,
    };
    updateDimensions = () => {
        this.setState({width: window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        {
            this.state.width < 935 ? this.state.settings.slidesToShow = 1 : this.state.settings.slidesToShow = 3
        }


        return (
            <div>
                <div className="container">
                    <div id='projects' className={s.Title}>Projects</div>
                    <div className={s.ProjectsWrapper}>
                        <Slider {...this.state.settings}>
                            <div className={s.outlineNone}><Project/></div>
                            <div className={s.outlineNone}><Project/></div>
                            <div className={s.outlineNone}><Project/></div>
                            <div className={s.outlineNone}><Project/></div>
                            <div className={s.outlineNone}><Project/></div>
                            <div className={s.outlineNone}><Project/></div>
                        </Slider>
                    </div>
                </div>

            </div>
        );
    }
}

export default Projects;
