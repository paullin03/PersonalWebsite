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
                        <Col xs={4}>
                        <Image src={require("./images/PaulHeadShot.jpg")} fluid />             
                        </Col>
                        <Col>
                        I am currently a 3rd year student studying Computer Engineering at UBC, with 1 term of co-op work experience.
                        I have experience with a both high-level languages such as Java, Python, and C++, as well as assembly languages like ARM
                        and x86, along with Verilog.
                        </Col>
                    </div>
                    </Container>
                </div>
            </div>
        );
    }

}
export default Introduction;
