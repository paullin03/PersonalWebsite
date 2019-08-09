import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
        <div id="Contact" class="sectionContainer">
            <h1>Contact</h1>
            {getFooterItem("https://www.linkedin.com/in/paul-lin-3aa17b15a/", require("./images/linkedin.png"))}

            {getFooterItem("https://github.com/paullin03", require("./images/github.png"))}

            {getFooterItem("mailto:linpaul0328@gmail.com", require("./images/email.png"))}

        </div>
      );
    }
}

function getFooterItem(href, src) {
    return (
        <a class="footerLink" href={href} target="_blank" rel="noopener noreferrer">
            <img alt="" src={src}/>
        </a>
    );
}

export default Contact;
