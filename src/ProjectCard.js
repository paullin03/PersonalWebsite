import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function ProjectCard(props) {
    return(
        <Card style={{background: "#b3cde0"}}>
            <Card.Body>
                {generateImages(props.src, props.descriptions)}
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                <Card.Text as="div">
                    {props.text}
                </Card.Text>
                {generateLink(props.href)}
            </Card.Body>
        </Card>
    );
}

function generateImages(images, descriptions) {
    if (!images) {
        return;
    } else if (images.length === 1) {
        return generateCardImage(images[0]);
    }
    return <Carousel indicators={false}>{generateCarouselItems(images, descriptions)}</Carousel>;
}

function generateCarouselItems(images, descriptions) {
    return images.map((image, index) => {
        return <Carousel.Item key={descriptions[index]}>
            {generateCardImage(image)}
            {generateDescription(descriptions[index])}
        </Carousel.Item>;
    });
}

function generateCardImage(src) {
    return <Card.Img variant="top" src={src} style={{width: "auto", maxHeight: "20rem"}}/>;
}

function generateDescription(src) {
    return <Card.Text style={{padding: "0.5rem"}}><i>{src}</i></Card.Text>;
}

function generateLink(href) {
    if (href) {
        return (
        <a className="footerLink" href={href} target="_blank" rel="noopener noreferrer">
            <img alt="" src={require("./images/github.png")}/>
        </a>);
    } else {
        return;
    }
}
export default ProjectCard;

