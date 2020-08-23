import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class WorkExperience extends Component {
    render() {
        return(
        <div id="WorkExperience" className="sectionContainer">
            <h1>Work Experience</h1>
            <div className="tabWrapper">
                <Tabs id="WorkExperienceTabs" defaultActiveKey="Intel" style={{color: "#black"}}>
                    <Tab eventKey="Intel" title="Intel Corporation">
                        <Card style={{background: "#b3cde0"}}>
                            <Card.Body>
                                <Card.Title>Intel Corporation</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">ASIC Hardware Performance Modeling Co-op{<br/>}January 2020 - August 2020 (8 months)</Card.Subtitle>
                                <Card.Text as="div">
                                    <ul>
                                        <li>Modelling CPU subsystem using gem5 and extending modelling capabilities with custom SystemC modules</li>
                                        <li>Designing, implementing, and executing benchmarks written in C and Assembly for gem5 and external cycle accurate models</li>
                                        <li>Performing architectural exploration by simulating use cases with developed models to inform product decisions</li>
                                        <li>Creating Bash & Python scripts and Makefiles to automate execution of benchmarks and results extraction resulting in 3x faster data collection process</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="Tasktop" title="Tasktop Technologies">
                        <Card style={{background: "#b3cde0"}}>
                            <Card.Body>
                                <Card.Title>Tasktop Technologies</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Junior Software Engineer{<br/>}May 2019 - December 2019 (8 months)</Card.Subtitle>
                                <Card.Text as="div">
                                    <ul>
                                        <li>Collaborating with a team in an Agile fashion with daily stand-ups, retrospectives, and code-reviews</li>
                                        <li>Writing production code in Java and carrying out testing by writing custom unit tests/manual testing</li>
                                        <li>Formatting requests and parsing payloads for various REST/SOAP APIs (ex. GitHub, Jira)</li>
                                        <li>Analyzing feasibility of features and providing an estimate of effort required</li>
                                        <li>Maintaining codebase by addressing test failures on nightly builds, tech debts, and defects</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tab>
                    
                    <Tab eventKey="Tutoring" title="Student Tutor">
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
                    </Tab>
                </Tabs>
            </div>  
        </div>  
        );
    }
}

export default WorkExperience;
