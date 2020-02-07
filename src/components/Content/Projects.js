import React from 'react';
import s from './Content.module.css';
import Project from "./Project";
import Slider from 'infinite-react-carousel';
import './Slider.css';


class Projects extends React.Component {

    state = {
        settings: {
            slidesToShow: 3,
            dots: true,
            duration: 100,
            arrows: false,
        },
        width: window.innerWidth,
        projects:[
            {
                projectServices:'UI/UX, WEB, HTML, CSS',
                title:'Project Management Admin',
                text:'Discover Business Strategy A thoughtful discovery process'
            },
            {
                projectServices:'UI/UX, WEB, HTML, CSS, React',
                title:'Project Management Admin',
                text:'Discover Business Strategy A thoughtful discovery process'
            },
            {
                projectServices:'UI/UX, WEB, HTML, CSS, TS',
                title:'Project Management Admin',
                text:'Discover Business Strategy A thoughtful discovery process'
            },
            {
                projectServices:'1',
                title:'1',
                text:'Discover Business Strategy A thoughtful discovery process'
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
        {
            this.state.width < 935 ? this.state.settings.slidesToShow = 1 : this.state.settings.slidesToShow = 3
        }

        let projects = this.state.projects.map((item,index)=>{
            return <div className={s.outlineNone}>
                <Project title={item.title}
                         key={index}
                         text={item.text}
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
