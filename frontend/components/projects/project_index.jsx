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
              let i=1
              let user = this.props.users[project.creator_id] || {};
              return (<ProjectIndexItem project={project} user={user} index={i+=1} key={project.id}/>);
            })}
          </div>
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
