import React from 'react';
import ReactDOM from 'react-dom';
import {Link, match} from 'react-router-dom';
import { values } from 'lodash';

class ProjectPage extends React.Component{

  componentDidMount(){
    console.log(this.props.projectId);
    this.props.getProject(this.props.projectId);
  }


  // percentFunded() {
  //   return(Math.floor((project.funding_raised/project.funding_goal)*100));
  // }
  //
  // daysToGo(){
  //   return(Math.floor(( new Date() - Date.parse(project.end_date) ) / 86400000));
  //

  componentWillReceiveProps(nextProps){
    if (this.props.projectId !== nextProps.projectId){
      this.props.getProject(nextProps.match.params.projectId);
    }
  }

  render(){
    const project = this.props.project;
    console.log(project);
    return(
        <div className="project-show-page">
          <h1> Demo Content </h1>
          <h2>{project.category}</h2>
        </div>
    );
  }
}

export default ProjectPage;

// <div className="project-show-page">
//   <h2>{project.category}</h2>
//   <h2>{project.id}</h2>
//   <img src={project.image_url}/>
//   <br/>
//   <h1>Title:{project.title}</h1>
//   <h2>{project.description}</h2>
//   {`by ${project.creator}`}
//   <br/>
//   {project.funding_raised} pledged
//   <br/>
//   {percentFunded} funded
//   <br/>
//   {daysToGo} Days to go
// </div>
