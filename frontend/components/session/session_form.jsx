import React from 'react';
import { Route, Redirect, Link, withRouter, history } from 'react-router-dom';

// we use withrouter when we have a component that isn't rendered by a route component.
// Right now, sessionform isn't accessed by any route component. So we use withrouter.
// withrouter is a higher order component. it wraps a react component (such as session form).
// withrouter passes it the router props LOCATION, MATCH, and HISTORY.

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "peterparker@columbia.edu",
			password: "I<3MaryJane"
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
		// this.props.history.push('/');
  }

  navLink(){
    if(this.props.formType === "login"){
      return (<span><Link className="alt-link" to="/signup">New to Impetus? Signup instead</Link></span>);
    } else {
      return (<span><Link className="alt-link" to= "/login">Already have an account? Login</Link></span>);
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
			<div className="session-form-page">
        <form className="session-form">
					<h1 id="session-form-title">{this.props.formType==="login" ? "Log into Impetus" : "Create an account"}</h1>
				<br/>
        {this.renderErrors()}
          <div className="login-form">
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')} className="login-input" />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
								onChange={this.update('password')}
                className = "login-input"  />
            </label>
            <br/>
            <input type="submit" className="session-form-submit" onClick={this.handleSubmit} value={this.props.formType==="login" ? "Log In" : "Sign Up"} />
						<button className="session-form-submit" onClick={this.handleGuestLogin}>Log In As Guest</button>
          </div>
					<br/>
					<div id = "session-foot">
					{this.navLink()}
					</div>
        </form>
			</div>
    );
  }

	handleGuestLogin(e){
		e.preventDefault();
		let user = { username : "guest", password: "password1"};
		this.props.login(user);
		// this.props.history.push('/');
	}

}

export default withRouter(SessionForm);
