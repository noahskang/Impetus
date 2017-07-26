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
    // this.props.getAllRewards();
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

  userEditButtons(){
    if(this.props.currentUser){
      if(this.props.currentUser.id===this.props.creatorId){
        return (
          <div>
            <button type="button" className="standard-black-button" id="delete" value="x" onClick={this.handleSubmit}>DELETE PROJECT</button>
            <Link to={`/projects/${this.props.projectId}/rewards`} className="standard-black-button" id="addrewards">ADD REWARDS</Link>
          </div>
        );
      }
    }
  }

  rewardList(){
    this.props.project.rewards.map(reward => {
      return(
        <div>
          <h1>reward.title</h1>
          <h1>reward.description</h1>
        </div>
      );
    });
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
              {this.userEditButtons()}
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
            <div className="project-show-stats">
              <Line percent={this.percentWithCap()}
                strokeWidth="0.8" strokeColor="#2BDE73"
                trailColor="#e6e6e6" trailWidth="0.8" />
              <span><p className="bolded">{`$${project.funding_raised} `}</p><p>pledged</p></span>
              <span><p className="bolded">{`${this.percentFunded(project)}% `}</p><p>funded</p></span>
              <span><p className="bolded">{this.daysToGo(project)}</p>&nbsp;<p>days to go</p></span>
              <button type="button" className id="back-project-button" value="x">Back this Project</button>
            </div>
          </div>
          <div className="details-rewards">
            <div className="details">
              <h2>{project.description}</h2>
            </div>
            <div className="rewards">
              <h2>{this.rewardList()}</h2>
            </div>
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
