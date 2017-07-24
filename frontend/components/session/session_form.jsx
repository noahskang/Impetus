import React from 'react';
import { Route, Redirect, Link, withRouter, history, location } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

	switchSessionType(){
		if(this.props.formType === "login"){
			return (<div><span><Link className="switch-form-button" to="/signup" onClick={this.props.clearErrors, this.clearPassword()}>New to Impetus? Signup instead</Link></span></div>);
		} else {
			return (<div><span><Link className="switch-form-button" to="/login" onClick={this.props.clearErrors, this.clearPassword()}>Already have an account? Login</Link></span></div>);
		}
	}

	clearPassword(){
		return () => this.setState({
			password: ""
		});
	}

	renderErrors(){
		return(
			<div>
				<br/>
				<ul>
					{this.props.errors.map((error, i) => (
						<li className="errors" key = {`error-${i}`}>
							{error}
						</li>
					))}
				</ul>
			</div>
		);
	}

	clearErrors(){
		this.props.receiveSessionErrors([]);
	}

  render(){
    return(
			<div className="session-page">
				<a className="session-home-link" href="/">
					<img className="logo" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1500584578/lightningbolt_white_gdx591.svg"/>
				</a>
				<ReactCSSTransitionGroup
          transitionName="fade-div"
          transitionAppear={true}
          transitionAppearTimeout={700}
          transitionEnter={false}
          transitionLeave={false}
          >
				<div className="session-form-div">
	        <form className="session-form">
						<h1 id="session-form-title">{this.props.formType==="login" ? "Log into Impetus" : "Create an account"}</h1>
					<br/>
	        <div className="login-form">
	          <label>
	            <input type="text"
								placeholder="peterparker"
	              value={this.state.username}
	              onChange={this.update('username')} className="login-form-field" />
	          </label>
	          <br/>
	          <label>
	            <input type="password"
	              value={this.state.password}
								onChange={this.update('password')}
	              className = "login-form-field"  />
	          </label>
						{this.renderErrors()}
	          <input type="submit" className="login-button" onClick={this.handleSubmit} value={this.props.formType==="login" ? "Log In" : "Sign Up"} />
						<button className="login-button" onClick={this.handleGuestLogin}>Log In As Guest</button>
	        </div>
						<br/>
						<div id = "session-foot">
							{this.switchSessionType()}
						</div>
	        </form>
				</div>
				</ReactCSSTransitionGroup>
			</div>
    );
  }

	handleGuestLogin(e){
		e.preventDefault();
		let user = { username : "guest1", password: "password1"};
		this.props.login(user);
	}

}

export default withRouter(SessionForm);
