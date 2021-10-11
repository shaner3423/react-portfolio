import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';
import Pdf from "../../assets/S.Crisostomo-Resume.pdf"

function Resume() {
    const [pages] = useState([
        {
            name: "resume"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    return (
        <section className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4" />
                        <h3>Front-end Proficiencies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Git</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Bulma</li>
                            <li>Materialize</li>
                        </ul>
                        <h3>Back-end Proficiencies</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize, SQLite</li>
                            <li>MongoDB, Mongoose</li>
                            <li>MERN Stack</li>
                        </ul>
                        <h3>Additional Skills and Certification</h3>
                        <ul>
                            <li>Network+</li>
                            <li>Security+</li>
                            <li>CompTIA A+ Certification</li>
                            <li>Certified Ethical Hacker Certifiation</li>
                            <li>Python</li>
                            <li>Amazon Web Services</li>
                            <li>Amazon Web Services Cloud Practitioner </li>
                        </ul>
                        <br/>
                        <br/>
                        <p className="text-center">
                           <a href={Pdf} className="text-faded white-link" download>Download my resume</a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;