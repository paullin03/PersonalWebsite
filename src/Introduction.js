import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Introduction extends Component{
    render() {
        return (
            <div>
                <div id="bannerContainer">
                    <img id="bannerImage" alt="Paul Lin" src={require("./images/StanleyLandscapeResize.png")}></img>
                </div>
                
                <div id="AboutMe" className="sectionContainer">          
                    <h1>About Me</h1>
                    <Container style={{background: "#b3cde0"}}>
                        <div className="row align-items-center" id="aboutMeRow">
                            <Col xs={7} sm={5}>
                                <Image src={require("./images/PaulHeadShot.jpg")} fluid />             
                            </Col>
                            <Col>
                                <ul>
                                    <li>3rd year UBC Computer Engineering</li>
                                    <ul>
                                        <li>1 term of co-op experience</li>
                                    </ul>
                                    <li>High level-language experience</li>
                                    <ul>
                                        <li>Java, Python, C++, JavaScript</li>
                                    </ul>
                                    <li>Low level-language experience</li>
                                    <ul>
                                        <li>ARM assembly, x86 assembly, Verilog</li>
                                    </ul>
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
