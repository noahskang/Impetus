import React from 'react';
import ReactDOM from 'react-dom';
import {Link, match, history} from 'react-router-dom';
import persistState from 'redux-localstorage';
import { values } from 'lodash';
import { Line } from 'rc-progress';
import RewardIndexItem from '../rewards/reward_index_item';
import PledgesForm from './pledges_form';
import Footer from '../Footer';


class ProjectShowPage extends React.Component{

  constructor(props){
    super(props);
    this.handleRewardSubmit = this.handleRewardSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    window.scrollTo(0,0);
  }

  shortenedDescription(){
    return this.props.project.description ? this.props.project.description.slice(0, 150) : "";
  }

  componentDidMount(){
    this.props.getProject();
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

  handleRewardSubmit(reward){
    if(!reward.current_user_is_backer){
      let user_id = this.props.currentUser.id;
      let pledge = {reward_id: reward.id, user_id};
      return ()=>this.props.createPledge(pledge);
    }
    return ()=>{};
  }

  rewardIndex(){
      return(
        this.props.rewardArray.map(reward => {
          return(<RewardIndexItem reward={reward} project={this.props.project} key={reward.id} userRewards = {this.props.userRewards} pledges={reward.pledge_count} currentUser={this.props.currentUser} clickMethod={this.handleRewardSubmit(reward)}/>);
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
    let creator = this.props.creator;

    return(
      <div>
      <div className="project-show-page">
        <div className="project-show-main animated fadeInLeftBig">
          <div className="project-title-bar">
            <div className="title-description">
              <h1>{project.title}</h1>
              <span className="author">{`by ${creator.username}`}</span>
              <h2>{this.shortenedDescription()}...</h2>
            </div>
            <div className="project-edit-button-div">
              {this.userEditButtons()}
            </div>
          </div>
          <div className="image-and-stats">
            <div className="image">
              <img src={project.image_url}/>
            </div>
            <div className="project-show-stats">
              <div className="line"><Line percent={this.percentWithCap()}
                strokeWidth="2" strokeColor="#2BDE73"
                trailColor="#e6e6e6" trailWidth="2" /></div>
              <span><p className="bolded">{`$${project.funding_raised} `}</p><p>pledged of{` $${project.funding_goal} `}goal</p></span>
              <span><p className="bolded">{`${this.percentFunded(project)}% `}</p><p>funded</p></span>
              <span><p className="bolded">{this.daysToGo(project)}</p><p>days to go</p></span>
              <Link to={`/projects/${this.props.projectId}/pledges`} id="back-project-button">Back This Project</Link>
            </div>
          </div>
        </div>
        <div className="details-rewards">
          <div className="details">
            <h1>About this project</h1>
            <h2>{project.description}</h2>
          </div>
          <div className="rewards">
            <h1>Support this project</h1>
            {this.rewardIndex()}
          </div>
        </div>
      </div>
     <Footer />
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
