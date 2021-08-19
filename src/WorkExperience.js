import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class WorkExperience extends Component {
    render() {
        return(
        <div id="WorkExperience" className="sectionContainer">
            <h1>Work Experience</h1>
            <div className="tabWrapper">
                <Tabs id="WorkExperienceTabs" defaultActiveKey="IMC" style={{color: "#black"}}>
                    <Tab eventKey="IMC" title="IMC Trading">
                        <ProjectCard title="IMC Trading" subtitle={["Software Engineer Intern", <br/>, "June 2021 - August 2021 (10 weeks)"]}
                            text={
                                <ul>
                                    <li>Enhanced quoting subsystem by implementing performant and scalable improvements using Java</li>
                                    <li>Increased profitability by redesigning component interactions to increase response volumes for auctions</li>
                                    <li>Communicated with traders to gather requirements and verify features</li>
                                    <li>Built automatic trader with custom strategies for trading simulations which had multiple top-3 finishes</li>
                                </ul>
                            }/>
                    </Tab>

                    <Tab eventKey="Intel" title="Intel Corporation">
                        <ProjectCard title="Intel Corporation" subtitle={["ASIC Hardware Performance Modeling Co-op", <br/>, "January 2020 - August 2020 (8 months)"]}
                            text={
                                <ul>
                                    <li>Modelling CPU subsystem using gem5 and extending modelling capabilities with custom SystemC modules</li>
                                    <li>Designing, implementing, and executing benchmarks written in C and Assembly for gem5 and external cycle accurate models</li>
                                    <li>Performing architectural exploration by simulating use cases with developed models to inform product decisions</li>
                                    <li>Creating Bash & Python scripts and Makefiles to automate execution of benchmarks and results extraction resulting in 3x faster data collection process</li>
                                </ul>
                            }/>
                    </Tab>

                    <Tab eventKey="Tasktop" title="Tasktop Technologies">
                        <ProjectCard title="Tasktop Technologies" subtitle={["Junior Software Engineer", <br/>, "May 2019 - December 2019 (8 months)"]}
                            text={
                                <ul>
                                    <li>Collaborating with a team in an Agile fashion with daily stand-ups, retrospectives, and code-reviews</li>
                                    <li>Writing production code in Java and carrying out testing by writing custom unit tests/manual testing</li>
                                    <li>Formatting requests and parsing payloads for various REST/SOAP APIs (ex. GitHub, Jira)</li>
                                    <li>Analyzing feasibility of features and providing an estimate of effort required</li>
                                    <li>Maintaining codebase by addressing test failures on nightly builds, tech debts, and defects</li>
                                </ul>
                            }/>
                    </Tab>
                    
                    <Tab eventKey="Tutoring" title="Student Tutor">
                        <ProjectCard title="Student Tutor" subtitle={"December 2015 - Present"}
                            text={
                                <ul>
                                    <li>Reinforcing teaching and coaching skills by tutoring 10+ students from Grade 8-12 in Calculus, Pre-Calculus,
                                        Chemistry, and Physics</li>
                                    <li>Teaching complex topics to students, resulting in boosts in academic performance</li>
                                </ul>
                            }/>
                    </Tab>
                </Tabs>
            </div>  
        </div>  
        );
    }
}

export default WorkExperience;
