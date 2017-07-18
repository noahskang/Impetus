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
      return <Link to="/signup">Signup instead</Link>;
    } else {
      return <Link to= "/login">login instead</Link>;
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
      <div>
        <form onSubmit = {this.handleSubmit}>
          Welcome to BenchBNB!
          <br/>
          Please {this.props.formType} or {this.navLink()}
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
            <input type="submit" value="Submit" />
          </div>
        </form>

      </div>
    );
  }

}

export default withRouter(SessionForm);
