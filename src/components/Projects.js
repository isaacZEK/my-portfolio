import React from 'react';

const Projects =()=>{
return (
    <section id="projects">
        <div className="container">
            <h2>Projects</h2>
            <div className="row">
                {/*Example project card*/}
                <div className="col-lg-4 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Chemetics Engineering</h5>
                            <p className="card-text">This is an advertisement website, that show cases the different kinds of products and services chemetics engineering offers. </p>
                            <a href="#" className="btn btn-primary"View Project></a>
                        </div>
                    </div>
                </div>
                {/*more projects later*/}
            </div>
        </div>
    </section>
);
};

export default Projects;