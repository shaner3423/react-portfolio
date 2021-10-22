import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helper';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'quizzam',
            description: 'Interactive Full-Stack Project',
            link: "https://quizam-project2.herokuapp.com/",
            repo: "https://github.com/shaner3423/quizam/blob/main/README.md"
        },
        {
            name: 'find-fresh',
            description: 'Interactive Front-End Project',
            link: "https://shaner3423.github.io/Find-nFresh/",
            repo: "https://github.com/shaner3423/Find-nFresh"
        },
        {
            name: 'portfolio',
            description: 'HTML/CSS',
            link: "https://shaner3423.github.io/portfolio/",
            repo: "https://github.com/shaner3423/portfolio"
        }
       
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;