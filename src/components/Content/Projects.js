import React from 'react';
import s from './Content.module.css';
import Project from "./Project";
import Slider from 'infinite-react-carousel';
import './Slider.css';
import todolist from '../../img/todolist.png'
import portfolio from '../../img/portfolio.png'
import rms from '../../img/rms.png'
import pechorin from '../../img/pechorin.png'


class Projects extends React.Component {

    state = {
        settings: {
            slidesToShow: 3,
            dots: true,
            duration: 100,
            arrows: false,
            gutter: 50,
            autoplay: true,
        },
        width: window.innerWidth,
        projects: [
            {
                projectServices: 'UI/UX, React.js, Redux, Redux Form',
                title: 'My Portfolio',
                text: 'Web site, where you can find my works',
                img: portfolio,
                link: 'https://nikitaks.github.io/Portfolio'
            },
            {
                projectServices: 'UI/UX, React.js, Redux, CSS/html, API, TS',
                title: 'To do list',
                text: 'A list of main and other tasks',
                img: todolist,
                link: 'https://nikitaks.github.io/todoListProd'
            },
            {
                projectServices: 'React, Redux',
                title: 'RMS',
                text: 'Register page',
                img: rms,
                link: 'https://rms-med.ru/'
            },
            {
                projectServices: 'React.js, Redux, CSS/html, API, TS',
                title: 'Pechorin',
                text: 'Food Shop',
                img: pechorin,
                link: 'https://pechorin.by/'
            },

        ]
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
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.width < 935 ? this.state.settings.slidesToShow = 1 : this.state.settings.slidesToShow = 3;
        let projects = this.state.projects.map((item, index) => {
            return <div className={s.outlineNone} key={index}>
                <Project title={item.title}
                         text={item.text}
                         img={item.img}
                         link={item.link}
                         projectServices={item.projectServices}/>
            </div>
        });
        return (
            <div>
                <div className="container">
                    <div id='projects' className={s.Title}>Projects</div>
                    <div className={s.projectsWrapper}>
                        <Slider {...this.state.settings}>
                            {projects}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
