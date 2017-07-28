import React from 'react';
import ProjectIndexItem from './project_index_item';
var Carousel = require('nuka-carousel');
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class ProjectIndex extends React.Component {

  constructor(props){
    super(props);
    this.props.getAllProjects();
    this.props.getAllUsers();
  }

  render(){
    this.projects = this.props.allProjects;
    return(
      <div className="project-index-head">
        <div className="parallax-bg">
          <ReactCSSTransitionGroup
            transitionName="fade-div"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
            >
          <div className = "title-caption top">
            <h1>MAKE AWESOME THINGS HAPPEN</h1>
            <h2>Jump in. Get Moving. Do the thing you need to do.</h2>
            <Link className="site-nav-item" id="start-a-project" to="/projects/new">START A PROJECT</Link>
          </div>
         </ReactCSSTransitionGroup>
       </div>
        <div className="projects-index-section">
          <h1>Featured Projects:</h1>
          <div className="projects-index">
            {this.projects.map(project => {
              let user = this.props.users[project.creator_id] || {};
              return (<ProjectIndexItem project={project} user={user} key={project.id}/>);
            })}
          </div>
       </div>
     </div>
     );
  }
}

export default ProjectIndex;
