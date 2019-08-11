import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class Software extends Component {
    render() {
        return (
        <div id="Software" className="sectionContainer">
            <h1>Software Projects</h1>
            <div className="tabWrapper">
            <Tabs id="SoftwareProjects" defaultActiveKey="taskOrganizer">
                <Tab eventKey="taskOrganizer" title="Task Organizer">
                    <ProjectCard title="Task Organizer" subtitle="Android App for helping users prioritize their tasks"
                    text={
                    <ul style={{textAlign:"left"}}>
                        <li>Developed an Android task organizer using Android Studio – organizes tasks to prioritize based on deadline, importance, and time commitment</li>
                        <li>Designed user interface for task entry in XML and utilized the Android Room Persistence Library to implement a database to store task entries</li>
                        <li>Collaborated and communicated with 3 others through GitHub and design meetings</li>
                    </ul>} href="https://github.com/paullin03/TaskOrganizer"
                    src={[require("./images/TaskOrganizerSummary.jpg"), require("./images/TaskOrganizerEntry.jpg")]}
                    descriptions={["Main Summary", "New Task Entry"]}/>
                </Tab>
                <Tab eventKey="foodCam" title="Food Cam">
                    <ProjectCard title="Food Cam" subtitle="Android App for scanning and reading nutrition labels"
                    text={
                    <ul style={{textAlign:"left"}}>
                        <li>Developed an Android app to take pictures of nutritional labels for automatic data entry</li>
                        <li>Designed user interface for manual label entry</li>
                        <li>Collaborated and communicated with 5 others to come up with design and divide tasks equally</li>
                    </ul>
                    } href="https://github.com/paullin03/foodcamera_xd2019" 
                    src={[require("./images/FoodCamUse.jpg"), require("./images/FoodCamEntry.jpg"), require("./images/FoodCamSummary.jpg")]}
                    descriptions={["Capture", "New Nutrition Entry", "Summary"]}/>
                </Tab>
            </Tabs>
            </div>
        </div>
      );
    }
}

export default Software;
