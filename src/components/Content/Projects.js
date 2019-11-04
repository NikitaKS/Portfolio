import React from 'react';
import s from './Content.module.css';
import Project from "./Project";

function Projects() {
    return (
        <div>
            <div className="container">
                <div className={s.ProjectsWrapper}>
                    <div className={s.ProjectsTitle}>Projects</div>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
