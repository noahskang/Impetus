import React from 'react';
import ReactDOM from 'react-dom';
import {Link, match, history} from 'react-router-dom';
import persistState from 'redux-localstorage';
import { values } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ProjectShowPage extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getProject();
    this.props.getAllUsers();
  }


  percentFunded(){
    return Math.floor((this.props.project.funding_raised/this.props.project.funding_goal)*100);
  }

  daysToGo(){
    return Math.round(Math.abs((Date.parse(this.props.project.end_date) - (new Date()).getTime()) / 86400000));
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.destroyProject().then(()=>this.props.history.push("/user/projects"));
    this.props.clearErrors();
  }
  deleteButton(){
    if(this.props.currentUser.id===this.props.user.id){
      return <button type="button" className="standard-black-button" id="delete" value="x" onClick={this.handleSubmit}>DELETE PROJECT</button>;
    }
  }
  render(){

    let project = this.props.project;
    let user = this.props.user;

    return(
        <div className="project-show-page">
    
          <div className="title-bar">
            {this.deleteButton()}
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
            {`by ${user.username}`}
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
