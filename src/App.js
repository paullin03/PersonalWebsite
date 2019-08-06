import React, { Component } from 'react';
import Introduction from './Introduction';
import WorkExperience from './WorkExperience';
import Software from './Software';
import Hardware from './Hardware';
import RelevantCourses from './RelevantCourses';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="body">
        <Router>
          <Navbar style={{background: "#011f4b"}} expand="lg" variant="dark" id="NavigationBar">
            <Link to="/">
              <Navbar.Brand>
                Paul Lin
              </Navbar.Brand>
            </Link>
            <Link to="/WorkExperience">            
              Work Experience
            </Link>
            <NavDropdown title="Projects">
            <NavDropdown.Item>
              <Link to="/Software">            
                Software
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Hardware">            
                Hardware
              </Link>
            </NavDropdown.Item>
            </NavDropdown>
            <Link to="/RelevantCourses">            
              Courses
            </Link>
            <Nav.Link href="#Contact">
              Contact
            </Nav.Link>
          </Navbar>
          <Route path="/" exact component={Introduction} />
          <Route path="/WorkExperience/" component={WorkExperience} />
          <Route path="/Software/" component={Software} />
          <Route path="/Hardware/" component={Hardware} />
          <Route path="/RelevantCourses/" component={RelevantCourses} />  
        </Router>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
