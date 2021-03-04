import React, {Component} from 'react';

const AboutMe = (props) => {
    return(
        <div className="AboutMe">
            <div className="AboutMeHeader">
                <h1>About Me</h1>
            </div>
            <hr></hr>
            <div className="AboutMeMain">
                <p className="AboutMeContent">I'm a junior fullstack developer
                that brings a plethora of skills from his previous positions in Biotech and Medical. I love
                solving technical problems and interacting with clients on a daily basis. I'm currently
                looking for jobs or similar jobs to Solutions Engineer, Software Engineer, or Sales Engineer.</p>
            </div>
            <img src="https://i.imgur.com/fWd1ovU.png" alt="Sam's Picture"></img>
        </div>
    )
}


export default AboutMe;