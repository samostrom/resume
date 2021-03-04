import React from 'react';

const Projects = (props) => {
    return (
        <div>
            <div className='EventList'>
                <h1>Projects</h1>

                <h2>Event List</h2>
                <p>Event List - a way for a large group of people to coordinate their events</p>
                <a href="https://eventlist3.herokuapp.com/"><img src="https://i.imgur.com/dAYeD8f.png"
                width="800" height="500"></img></a>

                <h2>Tavern</h2>
                <p>Tavern - helping tabletop rpg gamers connect</p>
                <a href="https://tavern-wbs.herokuapp.com/"><img src="https://i.imgur.com/r4jq3DN.png"
                width="800" height="500"></img></a>

                <h3>Meddit</h3>
                <p>Meddit - reddit for medical professionals</p>
                <a href="https://medditsite.herokuapp.com/"><img src="https://i.imgur.com/kB6KAXF.png"
                width="800" height="500"></img></a>
                <p>**Meddit's database is currently down on MongoDB so that I can host Event List</p>
            </div>
        </div>
    );
}

export default Projects