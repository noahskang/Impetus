import React from 'react';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class UserProjects extends React.Component {

  constructor(props){
    super(props);
    this.props.getAllProjects();
  }

  render(){
    return(
      <div className="userProjects">
        <ReactCSSTransitionGroup
          transitionName="fade-div"
          transitionAppear={true}
          transitionAppearTimeout={700}
          transitionEnter={false}
          transitionLeave={false}
          >
        <h1>My Projects</h1>
        <div className="userProjects-list">
          {this.props.userProjects.map(project =>
            (<Link id="user-project-link" to={`/projects/${project.id}`} key={project.id}>
            <p>
              <span id="title-and-caption">{`${project.title}: `}{project.description}</span>
            </p>
          </Link>))}
        </div>
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default UserProjects;
