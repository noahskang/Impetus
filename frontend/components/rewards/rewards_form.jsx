import React from 'react';

class RewardsForm extends React.Component{
  constructor(props){
      super(props);
      this.state={
        title: "",
        description: "",
        amount: "",
        delivery_date: "",
        project_id: this.props.projectId,
        backing_limit: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e=>this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const reward = Object.assign({}, this.state);
    this.props.createReward(reward).then(()=>this.props.history.replace(`/projects/${this.props.projectId}`));
    this.props.clearErrors();
  }

  render(){
    return(<div className="reward-form-page">
      <div id="reward-form-contents">
        <div className="reward-form-head">
          <h1>Create a reward</h1>
        </div>
        <form className="project-form reward-form">
          <label>Title
            <input type="text" value={this.state.title} placeholder="Custom t-shirt" onChange={this.update('title')}/>
          </label>
          <label>Description
            <input type="text" placeholder="you will receive a t-shirt customized with your name!" value={this.state.description} onChange={this.update('description')}/>
          </label>
          <label>Amount ($)
            <input type="number" placeholder="25" value={this.state.amount} onChange={this.update('amount')}/>
          </label>
          <label>Backer Limit
            <input type="number" placeholder="23" value={this.state.backing_limit} onChange={this.update('backing_limit')}/>
          </label>
          <label>Delivery date
            <input type="date" value={this.state.delivery_date} onChange={this.update('delivery_date')}/>
          </label>
          <div className="submit_div">
            <button type="button" onClick={this.handleSubmit}>Save and Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
  }

}

export default RewardsForm;
