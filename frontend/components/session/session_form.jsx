import React from 'react';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';

// we use withrouter when we have a component that isn't rendered by a route component.
// Right now, sessionform isn't accessed by any route component. So we use withrouter.
// withrouter is a higher order component. it wraps a react component (such as session form).
// withrouter passes it the router props LOCATION, MATCH, and HISTORY.

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  update(field){
    return e=>this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  navLink(){
    if(this.props.formType === "login"){
      return (<span>New to Impetus? &nbsp;<Link to="/signup">Signup instead</Link></span>);
    } else {
      return (<span>Have an account? &nbsp;<Link to= "/login">login instead</Link></span>);
    }
  }
	renderErrors(){
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key = {`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render(){
    return(
      <div className="session-form-div">
        <form className="session-form">
					<h1 id="login">Log into Impetus</h1>
					<br/>
					{this.navLink()}
				<br/>
					<h2>{this.props.formType}</h2>
        {this.renderErrors()}
          <div className="login-form">
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')} className="login-input" />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password} onChange={this.update('password')}
                className = "login-input"  />
            </label>
            <br/>
            <input type="submit" onClick={this.handleSubmit} value={this.props.formType} />
						<br/>
						<button onClick={this.handleGuestLogin}>Log in as guest</button>
          </div>
        </form>
      </div>
    );
  }

	handleGuestLogin(e){
		e.preventDefault();
		let user = { username : "guest", password: "password1"};
		this.props.login(user);
	}

}

export default withRouter(SessionForm);
