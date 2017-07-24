import React from 'react';
import ReactDOM from 'react-dom';
import {Link, match} from 'react-router-dom';
import { values } from 'lodash';
import persistState from 'redux-localstorage';

class ProjectPage extends React.Component{

  constructor(props){
    super(props);
    this.props.getProject(this.props.projectId);
  }

  componentDidMount(){
    this.props.getProject(this.props.projectId);
  }

  percentFunded(){
    let project = this.props.project;
    return Math.floor((project.funding_raised/project.funding_goal)*100);
  }

  daysToGo(){
    let project = this.props.project;
    return Math.round(Math.abs((Date.parse(project.end_date) - (new Date()).getTime()) / 86400000));
  }


  render(){
    let project = this.props.project;
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
            {`${this.percentFunded()}% funded`}
            <br/>
            {this.daysToGo()} Days to go
          </div>
          <div className="details">
            <h2>{project.description}</h2>
          </div>

        </div>
    );
  }
}

export default ProjectPage;
