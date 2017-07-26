import React from 'react';
import ReactDOM from 'react-dom';
import {Link, match, history} from 'react-router-dom';
import persistState from 'redux-localstorage';
import { values } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Line } from 'rc-progress';

class ProjectShowPage extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getProject();
    this.props.getAllUsers();
  }

  percentWithCap(){
    return Math.min(this.percentFunded(), 100);
  }

  percentFunded(){
    return Math.floor((this.props.project.funding_raised/this.props.project.funding_goal)*100);
  }

  daysToGo(){
    return Math.round(Math.abs((Date.parse(this.props.project.end_date) - (new Date()).getTime()) / 86400000));
  }

  deleteButton(){
    if(this.props.currentUser){
      if(this.props.currentUser.id===this.props.creatorId){
        return (<button type="button" className="standard-black-button" id="delete" value="x" onClick={this.handleSubmit}>DELETE PROJECT</button>);
      }
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.destroyProject().then(()=>this.props.history.push("/user/projects"));
    this.props.clearErrors();
  }
  render(){

    let project = this.props.project;
    let user = this.props.user;

    return(
        <div className="project-show-page">
          <div className="project-title-bar">
            <div className="author-button">
              <span className="author">{`by ${user.username}`}</span>
              {this.deleteButton()}
            </div>
            <div className="title-description">
              <h1>{project.title}</h1>
              <h2>{project.description}</h2>
            </div>
          </div>
          <div className="image-and-stats">
            <div className="image">
              <img src={project.image_url}/>
            </div>
            <div className="project-stats">
              <Line percent={this.percentWithCap()}
                strokeWidth="0.8" strokeColor="#2BDE73"
                trailColor="#e6e6e6" trailWidth="0.8" />
              <p><p className="bolded">{`$${project.funding_raised} `}</p><p>pledged</p></p>
              <p><p className="bolded">{`${this.percentFunded(project)}% `}</p><p>funded</p></p>
              <p><p className="bolded">{this.daysToGo(project)}</p>&nbsp;<p>days to go</p></p>
              <button type="button" className id="back-project-button" value="x">Back this Project</button>
            </div>
          </div>
          <div className="details">
            <h2>{project.description}</h2>
          </div>

        </div>
    );
  }
}

export default ProjectShowPage;

// <div className="stats">
//   {project.funding_raised} pledged
//   <br/>
//   {`${this.percentFunded(project)}% funded`}
//   <br/>
//   {this.daysToGo(project)} Days to go
// </div>
