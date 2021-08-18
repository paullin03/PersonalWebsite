import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Introduction extends Component{
    render() {
        return (
            <div>
                <div id="bannerContainer">
                    <img id="bannerImage" alt="Stanley Park Landscape Header" src={require("./images/StanleyLandscapeResize.jpg")}></img>
                </div>
                
                <div id="AboutMe" className="sectionContainer">          
                    <h1>About Me</h1>
                    <Container style={{background: "#b3cde0"}}>
                        <div className="row align-items-center" id="aboutMeRow">
                            <Col xs={7} sm={5}>
                                <Image src={require("./images/PaulHeadShot.jpeg")} fluid />             
                            </Col>
                            <Col>
                                <ul>
                                    <h2>Paul Lin</h2>
                                    <br/>
                                    <h5>Technical</h5>
                                    <li>4th year UBC Computer Engineering</li>
                                    <ul>
                                        <li>5 terms of work experience</li>
                                    </ul>
                                    <li>Expected Graduation Date: May 2022</li>
                                    <li>High-level language experience</li>
                                    <ul>
                                        <li>Java, Python, C++, JavaScript</li>
                                    </ul>
                                    <li>Low-level language experience</li>
                                    <ul>
                                        <li>C, ARM assembly, x86 assembly</li>
                                    </ul>
                                    <li>HDL experience</li>
                                    <ul>
                                        <li>Verilog</li>
                                    </ul>
                                    <br/>
                                    <h5>Interests</h5>
                                    <li>Vancouver Canucks &#x1F3D2;</li>
                                    <li>Rubik's Cube</li>
                                    <li>Hiking + Running &#x1f97e; &#x1f3c3;</li>
                                    <li>Ultimate Frisbee &#x1f94f;</li>
                                </ul>
                            </Col>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }

}
export default Introduction;
