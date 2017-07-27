import React from 'react';
import ReactDOM from 'react-dom';
import {Link, match, history} from 'react-router-dom';
import persistState from 'redux-localstorage';
import { values } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Line } from 'rc-progress';
import RewardIndexItem from '../rewards/reward_index_item';
import PledgesForm from './pledges_form';

class ProjectShowPage extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getProject();
    this.props.getAllUsers();
    this.props.getAllRewards();
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
          <div className="edit-buttons">
            <button type="button" id="delete" value="x" onClick={this.handleSubmit}>DELETE PROJECT</button>
            <Link to={`/projects/${this.props.projectId}/rewards`} id="addrewards">ADD REWARDS</Link>
          </div>
        );
      }
    }
  }

  rewardIndex(){
      return(
        this.props.rewardArray.map(reward => {
          return(<RewardIndexItem reward={reward} project={this.props.project} key={reward.id} pledges={reward.pledge_count} backers={reward.backer_count}/>);
        })
      );

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
            <div className="creator-button-div">
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
                strokeWidth="2" strokeColor="#2BDE73"
                trailColor="#e6e6e6" trailWidth="2" />
              <span><p className="bolded">{`$${project.funding_raised} `}</p><p>pledged</p></span>
              <span><p className="bolded">{`${this.percentFunded(project)}% `}</p><p>funded</p></span>
              <span><p className="bolded">{this.daysToGo(project)}</p>&nbsp;<p>days to go</p></span>
              <Link to={`/projects/${this.props.projectId}/pledges`} id="back-project-button">Back This Project</Link>
            </div>
          </div>
          <div className="details-rewards">
            <div className="details">
              <h2>{project.description}</h2>
            </div>
            <div className="rewards">
              {this.rewardIndex()}
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
