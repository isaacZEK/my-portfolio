import React from 'react';

const Skills = () =>{

return (
    <section id="skills">
        <div classname = "container">
            <h2>Skills</h2>
            <div className="row">
                {/*example skill badges*/}
                <div className="col-md-4">
                    <h4>Programming languade</h4>
                    <ul>
                        <li>JavScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP</li>
                    </ul>
                </div>
                {/*adding skills bit by bit*/}
            </div>
        </div>
    </section>
);

};
export default Skills;