import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar'
import {Switch, Route} from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import EducationAndInterests from '../EducationAndInterests/EducationAndInterests'
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">Virtual Tour</header>
        <div className="NavBar">
          <NavBar />
          
        </div>
        <div className="Main">
          <Switch>
            <Route exact path='/AboutMe' render={({location})=>
              <AboutMe
              
              />
            
            }/>
            <Route exact path='/Experience' render={({location})=>
              <Experience
              
              />
            
            }/>
            <Route exact path='/Projects' render={({location})=>
              <Projects
              
              />
            
            }/>
            <Route exact path='/Skills' render={({location})=>
              <Skills
              
              />
            
            }/>
            <Route exact path='/EducationAndInterests' render={({location})=>
              <EducationAndInterests
              
              />
            
            }/>
            <Route exact path='/Contact' render={({location})=>
              <Contact
              
              />
            
            }/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
