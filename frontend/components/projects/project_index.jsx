import React from 'react';
import ProjectIndexItem from './project_index_item';
var Carousel = require('nuka-carousel');


class ProjectIndex extends React.Component {

  constructor(props){
    super(props);
    this.props.getAllProjects();
    this.props.getAllUsers();
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
          {this.projects.map(project => {
            let user = this.props.users[project.creator_id] || {};
            return (<ProjectIndexItem project={project} user={user} key={project.id}/>);
          })}
       </div>
     </div>
     );
  }
}

export default ProjectIndex;

// <Carousel ref="carousel">
//  <img src="http://res.cloudinary.com/noah-s-kang/image/upload/c_scale,w_2880/v1500628592/dino-reichmuth-115620_w5drec.jpg"/>
//   <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
// </Carousel>
