import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Software from './Software'
import Hardware from './Hardware'
import Footer from './Footer'
import Introduction from './Introduction'
import RelevantCourses from './RelevantCourses'
import WorkExperience from './WorkExperience'
import ProjectCard from './ProjectCard'


describe('pages renders without crashing', () => {
  let testComponents = [<App/>, <Software/>, <Hardware/>, <Footer/>, <Introduction/>,
    <RelevantCourses/>, <WorkExperience/>, <ProjectCard/>]
  let testComponentNames = ["App", "Software", "Hardware", "Footer", "Introduction",
    "RelevantCourses", "WorkExperience", "ProjectCard"]

  testComponents.forEach(
    (component, index) => {
      it('load '+ testComponentNames[index] + ' component', () => {
        testRenderComponent(component.displayName)
      });
    }
  )
});

function testRenderComponent(componentUnderTest) {
  const div = document.createElement('div');
  ReactDOM.render(componentUnderTest, div);
  ReactDOM.unmountComponentAtNode(div);
}
