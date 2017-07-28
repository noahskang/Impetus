import React from 'react';

class PledgesForm extends React.Component{
  constructor(props){
      super(props);
      this.state={
        user_id: this.props.currentUserId,
        reward_id: -1
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.rewardDropdown = this.rewardDropdown.bind(this);
  }

  componentDidMount(){
    this.props.getProject();
    this.props.fetchProjects();
  }

  update(field){
    return e=>this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const pledge = Object.assign({}, this.state);
    this.props.createPledge(pledge).then(()=>this.props.history.replace(`/projects/${this.props.project.id}/`));
    this.props.clearErrors();
  }

  rewardDropdown(){
    return(
        <select className="reward-dropdown" name="rewards" onChange={this.update('reward_id')}>
          <option id="pledge-placeholder" value="" disabled selected>Select your reward</option>
          {this.props.rewards.map(reward=>(
            <option value={reward.id} key={reward.id}>{reward.title}</option>
          ))}
        </select>
    );
  }

  render(){
    return(
      <div className="project-show-page backing-page">
        <div className="project-title-bar animated fadeIn">
          <div className="project-edit-button-div">
            <a className="project-show-link" href={`#/projects/${this.props.project.id}/`}>
    					<img className="back-arrow" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1501274019/arrows_long_left1600_drewzl.png"/>
              <h2>view project</h2>
    				</a>
          </div>
          <div className="title-description">
            <h1>{this.props.project.title}</h1>
            <span className="author">{`by ${this.props.creator.username}`}</span>
            <h2>{this.props.project.description}</h2>
          </div>
        </div>
        <div className="backing-form-contents animated fadeInLeftBig">
          <form className="backing-form">
            {this.rewardDropdown()}
            <div className="submit_div">
              <button type="button" onClick={this.handleSubmit}>Back Project</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PledgesForm;
