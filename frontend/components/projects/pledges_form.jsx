import React from 'react';

class PledgesForm extends React.Component{
  constructor(props){
      super(props);
      this.state={
        user_id: this.props.currentUserId,
        reward_id: 0
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
    this.props.createPledge(pledge).then(()=>this.props.history.goBack());
    this.props.clearErrors();
  }

  rewardDropdown(){
    return(
      <label>Reward
        <select name="rewards" onChange={this.update('reward_id')}>
          {this.props.rewards.map(reward=>(
            <option value={reward.id} key={reward.id}>{reward.title}</option>
          ))}
        </select>
      </label>
    );
  }

  render(){
    return(
      <div className="project-show-page">
        <div className="project-title-bar">
          <div className="creator-button-div">
            <span className="author">{`by ${this.props.creator.username}`}</span>
          </div>
          <div className="title-description">
            <h1>{this.props.projecttitle}</h1>
            <h2>{this.props.projectdescription}</h2>
          </div>
        </div>
        <div className="backing-form-contents">
          <div id="backing-form-head">
            <h1>Back this Project</h1>
          </div>
          <form className="backing-form">
            <h2>custom amount filler</h2>
            {this.rewardDropdown()}
            <input type="submit" value="Submit Form" onClick={this.handleSubmit}/>
          </form>
        </div>
      </div>
    );
  }
}

export default PledgesForm;
