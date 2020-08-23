import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class RelevantCourses extends Component {
    render() {
        return (
        <div id="RelevantCourses" className="sectionContainer">
            <h1>Relevant Courses</h1>
            <div className="tabWrapper">
            <Tabs id="RelevantCoursesTabs" defaultActiveKey="CPSC 221" style={{color: "#black"}}>
                <Tab eventKey="CPSC 221" title="CPSC 221">
                    <ProjectCard title="Basic Algorithms and Data Structures" subtitle="Language: C++"
                    text={
                    <ul>
                        <h5>Topics</h5>
                        <li>Data structures such as heaps, AVL tree, stack, queues, graphs</li>
                        <li>Algorithms for trees and graphs (ex. Kruskal's, Prim's, tree traversals, BFS, DFS)</li>
                        <br/>
                        <h5>Projects</h5>
                        <li>Photo manipulation algorithms using self-implemented wrapped quadtree to represent an image</li>
                        <li>Fill algorithms for photos using self-implemented deque</li>
                        <li>Circular doubly-linked list implementation and algorithms</li>
                    </ul>}
                    src={[require("./images/bfsrain.gif"), require("./images/dfsrain.gif")]}
                    descriptions={["Sample BFS fill of an image of rain", "Sample DFS fill of an image of rain"]}/>
                </Tab>
                <Tab eventKey="CPSC 261" title="CPSC 261">
                    <ProjectCard title="Basics of Computer Systems" subtitle="Languages: C, x86 Assembly"
                    text={
                    <ul>
                        <h5>Topics</h5>   
                        <li>x86 Assembly and CPU pipelining</li>
                        <li>Components of Operating Systems (cache, file system, dynamic memory allocation, virtual memory)</li>
                        <br/>
                        <h5>Projects</h5>
                        <li><a href="#Hardware">Operating System Components</a></li>
                    </ul>
                    }/>
                </Tab>
                <Tab eventKey="CPEN 211" title="CPEN 211">
                    <ProjectCard title="Introduction to Microcomputers" subtitle="Languages: Verilog, ARM Assembly"
                    text={
                    <ul>
                        <h5>Topics</h5>
                        <li>Finite State Machine Design (Moore and Mealy)</li>
                        <li>Combinational and Sequential Circuit Design</li>
                        <li>I/O, Exceptions, Interrupts, Pipelining</li>
                        <br/>
                        <h5>Projects</h5>
                        <li><a href="#Hardware">Simple RISC Machine</a></li>
                        <li>Interrupt service routine written in ARM Assembly</li>
                    </ul>
                    }/>
                </Tab>          
                <Tab eventKey="CPEN 221" title="CPEN 221">
                    <ProjectCard title="Principles of Software Construction" subtitle="Language: Java"
                    text={
                    <ul>
                        <h5>Topics</h5>
                        <li>Software Construction principles such as testing, data types, and specifications</li>
                        <li>Parallel and Concurrent Programming concepts such as fork-join parallelism, thread safety, and data races</li>
                        <br/>
                        <h5>Projects</h5>
                        <li>Relational database in Java to store data tables with interaction through function calls or terminal commands.
                        Defined a grammar for a subset of SQL (ex. Create, Select, Store) to interact with database and generated a lexer and a parser through ANTLR for processing commands
                        </li>
                        <li>Calculator which was then used to solve cryptarithms</li>
                        <li>Implemented Graph classes and applied them to provide a solver for Boggle games and to find the centre of the Marvel Universe</li>
                        <li>Utilised Microsoft Azure's Sentiment API to compare pieces of text to figure out which were the most similar</li>
                    </ul>
                    }/>
                </Tab>
                <Tab eventKey="CPEN 291" title="CPEN 291">
                    <ProjectCard title="Computer Engineering Design Studio" subtitle="Language: Python"
                    text={
                    <ul>                        
                        <h5>Projects</h5>
                        <li>Created a social media-esque music web app using Spotify's API to make recommendations based on your current mood</li>
                        <li>Constructed a line-following robot along with developing an Android app for controlling it</li>
                        <li>Designed circuits and wrote software for Raspberry Pi to power dancing robots, scrolling displays, and keypad games</li>
                    </ul>
                    }/>
                </Tab>
            </Tabs>
            </div>
        </div>
      );
    }
}

export default RelevantCourses;
