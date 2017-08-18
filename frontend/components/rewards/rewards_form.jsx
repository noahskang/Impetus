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
      this.props.clearErrors();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.currentDate = (new Date()).toJSON().slice(0,10);
  }

  update(field){
    return e=>this.setState({
      [field]: e.currentTarget.value
    });
  }

  errors() {
    if (this.props.errors) {
      return (
        <ul className="project-errors">
        {this.props.errors.map(error => {
          return (<li className="project-error-item" key={error}>{error}</li>);
        })}
      </ul>
      );
    }
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
          {this.errors()}
          <label>Title
            <input type="text" value={this.state.title} placeholder="Custom t-shirt" onChange={this.update('title')}/>
          </label>
          <label>Description
            <input type="text" placeholder="you will receive a t-shirt customized with your name!" value={this.state.description} onChange={this.update('description')}/>
          </label>
          <label>Amount ($)
            <input type="number" placeholder="25"
              min="0" max="100000000"
              value={this.state.amount} onChange={this.update('amount')}/>
          </label>
          <label>Backer Limit
            <input type="number" placeholder="23"
              min="0" max="100000000"
              value={this.state.backing_limit} onChange={this.update('backing_limit')}/>
          </label>
          <label>Delivery date
            <input type="date" value={this.state.delivery_date}
              min={this.currentDate}
             onChange={this.update('delivery_date')}/>
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
