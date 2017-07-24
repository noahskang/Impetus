import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {

  constructor(props){
    super(props);
    this.props.getAllProjects();
  }

  render(){
    this.projects = this.props.allProjects;
    return(
      <div className="project-index-section">
        <div className="carousel">
          <img src="http://res.cloudinary.com/noah-s-kang/image/upload/c_scale,w_2880/v1500628592/dino-reichmuth-115620_w5drec.jpg"/>
        </div>
       <div className="projects-index grid-container">
         <h1>Projects:</h1>
         {this.projects.map(project => (
           <ProjectIndexItem project={project} key={project.id}/>
         ))}
       </div>
     </div>
     );
  }
}

export default ProjectIndex;
