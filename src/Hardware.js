import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class Hardware extends Component {
    render() {
        return (
        <div id="Hardware" className="sectionContainer">
            <h1>Hardware Projects</h1>
            <div className="tabWrapper">
            <Tabs id="HardwareProjects" defaultActiveKey="RISCMachine" style={{color: "#black"}}>
                <Tab eventKey="RISCMachine" title="Simple RISC Machine">
                    <ProjectCard title="Simple RISC Machine" subtitle="Turing-complete Machine"
                    text={
                    <ul>
                        <li>Designed and coded a datapath (including register file, arithmetic logic unit, pipeline registers) and a finite-state machine controller for a Turing-complete machine in Verilog</li>
                        <li>Wrote test benches in Verilog and conducted simulations in ModelSim to verify correctness of modules</li>
                        <li>Accomplished all required in-class elements, passing all auto-grader tests along with adding additional support for virtual functions</li>
                    </ul>
                    }/>
                </Tab>
                <Tab id="OS" eventKey="OS" title="Operating System Components">
                    <ProjectCard title="Operating System Components" subtitle="Simulation of OS features"
                    text={
                    <ul>
                        <li>Implemented a software cache in C</li>
                        <li>Implemented a FAT file system in C along with an optional component for interacting with filesystem through command line</li>
                        <li>Simulated the operation of implicit free lists for dynamic memory allocation</li>
                        <li>Created an instruction parser for x86</li>
                    </ul>
                    }/>
                </Tab>
            </Tabs>
            </div>
        </div>
      );
    }
}

export default Hardware;
