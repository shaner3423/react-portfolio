import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">Aspiring front-end developer with robust experience in cyber security and cloud services.</p>
                       
                        <p className="text-faded mb-5">My experience in cybersecurity and full-stack web development has enabled me to see how things are, but what could be. These traditionally separate fields have become more interdependent and these experience has taught me to think creatively in solving challenging problems, while always being attentive to details and the cascade of events that can result from one decision. Collaboration, effective written and verbal communicaton, and critical thinking are invaluable skills that are the cornerstone of my education and abilities.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About