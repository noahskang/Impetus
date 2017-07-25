import React from 'react';
import ReactDOM from 'react-dom';
import {Link, match} from 'react-router-dom';
import persistState from 'redux-localstorage';
import { values } from 'lodash';

class ProjectShowPage extends React.Component{

  constructor(props){
    super(props);
    this.props.getProject(this.props.projectId);
  }

  componentDidMount(){
    this.props.getProject(this.props.projectId);
  }

  percentFunded(project){
    return Math.floor((project.funding_raised/project.funding_goal)*100);
  }

  daysToGo(project){
    return Math.round(Math.abs((Date.parse(project.end_date) - (new Date()).getTime()) / 86400000));
  }


  render(){
    let project = Object.values(this.props.projects)[0] || {};
    console.log("project", project);
    return(
        <div className="project-show-page">
          <div className="title-bar">
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
            {`by ${project.creator}`}
          </div>
          <div className="image-and-backing">
            <img src={project.image_url}/>
            {project.funding_raised} pledged
            <br/>
            {`${this.percentFunded(project)}% funded`}
            <br/>
            {this.daysToGo(project)} Days to go
          </div>
          <div className="details">
            <h2>{project.description}</h2>
          </div>

        </div>
    );
  }
}

export default ProjectShowPage;
