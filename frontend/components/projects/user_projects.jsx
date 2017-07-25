import React from 'react';
import {Link} from 'react-router-dom';


class UserProjects extends React.Component {

  constructor(props){
    super(props);
    this.props.getAllProjects();
  }

  render(){
    return(
      <div className="userProjects">
        <h1>My Projects</h1>
        <div className="userProjects-list">
          {this.props.userProjects.map(project =>
            (<Link id="user-project-link" to={`/projects/${project.id}`} key={project.id}>
            <p>
              <span id="project-link-title">{`${project.title}: `}</span>
              <span id="project-link-description">{project.description}</span>
            </p>
          </Link>))}
        </div>
      </div>
    );
  }
}

export default UserProjects;
