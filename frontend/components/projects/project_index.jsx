import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class ProjectIndex extends React.Component {

  constructor(props){
    super(props);
    this.props.getAllProjects();
  }

  render(){
    this.projects = this.props.allProjects;
    return(
      <div className="project-index-head">
        <div className="parallax-bg animated fadeIn">
          <div className = "title-caption top">
            <h1>MAKE AWESOME THINGS HAPPEN</h1>
            <h2>Jump in. Get Moving. Do the thing you need to do.</h2>
            <Link className="site-nav-item" id="start-a-project" to="/projects/new">START A PROJECT</Link>
          </div>
       </div>
        <div className="projects-index-section">
          <h1>Featured Projects:</h1>
          <div className="projects-index">
            {this.projects.map(project => {
              let user = project.creator || {};
              return (<ProjectIndexItem project={project} user={user} key={project.id}/>);
            })}
          </div>
       </div>
     </div>
     );
  }
}

export default ProjectIndex;
