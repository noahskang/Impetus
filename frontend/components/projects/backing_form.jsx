import React from 'react';

class BackingForm extends React.Component{
  constructor(props){
      super(props);
      this.state={
        user_id: this.props.userId,
        reward_id: 0
      };
      this.handleSubmit = this.handleSubmit.bind(this);
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
            <option value={reward.id}>{reward.title}</option>
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
            {this.userEditButtons()}
          </div>
          <div className="title-description">
            <h1>{this.props.title}</h1>
            <h2>{this.props.description}</h2>
          </div>
        </div>
        <div className="backing-form-contents">
          <div id="backing-form-head">
            <h1>Back this Project</h1>
          </div>
          <form className="backing-form">
            <h2>custom amount filler</h2>
            {this.rewardDropdown()}
            <input type="submit" onClick={this.handleSubmit}>Submit Form</input>
          </form>
        </div>
      </div>
    );
  }
}

export default BackingForm;
