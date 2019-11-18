import React from 'react';
import s from './Content.module.css';
import Project from "./Project";

function Projects() {
    return (
        <div>
            <div className="container">
                <div className={s.Title}>Projects</div>
                <div className={s.ProjectsWrapper}>
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
