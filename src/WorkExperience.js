import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class WorkExperience extends Component {
    render() {
        return(
        <div id="WorkExperience" className="sectionContainer">
            <h1>Work Experience</h1>
            
            <Card style={{background: "#b3cde0"}}>
                <Card.Body>
                    <Card.Img variant="top" src={require("./images/tasktop.png")} style={{maxWidth: "80%", height: "auto", paddingBottom: "0.5rem"}}/>
                    <Card.Title>Tasktop Technologies</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Junior Software Developer{<br/>}May 2019 - December 2019 (8 months)</Card.Subtitle>
                    <Card.Text as="div">
                        <ul>
                            <li>Collaborating with a team in an Agile fashion with daily stand-ups, retrospectives, and code-reviews</li>
                            <li>Writing production code in Java and carrying out testing by writing custom unit tests/manual testing</li>
                            <li>Formatting requests and parsing payloads for various REST/SOAP APIs (ex. GitHub, Jira)</li>
                            <li>Analyzing feasibility of features and providing an estimate of effort required</li>
                            <li>Reviewing nightly builds and addressing test failures</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

            <br/>
            <Card style={{background: "#b3cde0"}}>
                <Card.Body>
                    <Card.Title>Student Tutor</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">December 2015 - Present</Card.Subtitle>
                    <Card.Text as="div">
                        <ul>
                            <li>Reinforcing teaching and coaching skills by tutoring 10+ students from Grade 8-12 in Calculus, Pre-Calculus,
Chemistry, and Physics</li>
                            <li>Teaching complex topics to students, resulting in boosts in academic performance</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
        );
    }
}

export default WorkExperience;



