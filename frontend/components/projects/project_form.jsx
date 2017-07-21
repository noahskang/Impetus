import React from 'react';
import { Route, withRouter, Link} from 'react-router-dom';


class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: "",
      description: "",
      category: "",
      funding_goal: "",
      end_date: "",
    };
  }

  update(field){
    return e=>this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.createProject(project);
  }

  categoryDropdown(){
    return(
      <label>Category
        <input type="text" placeholder="Local" onChange={this.update('category')}/>
      </label>
    );
  }

  render(){
    return(
      <div className="project-form-page">
        <div className="project-form-head">
          <div className = "hero-head">
            <h3>let's get started</h3>
            <h1>NEW PROJECT</h1>
          </div>
          <h2>Make a great first impression with your project's title and image, and set your funding goal, campaign duration, and project category</h2>
        </div>
        <form className="project-form">
          <label>Title
            <input type="text" placeholder="Web Cleanup" onChange={this.update('title')}/>
          </label>
          <br/>
          <label>Description
            <input type="text" placeholder="Support my efforts to clean up the stray webs left all around Brooklyn." onChange={this.update('description')}/>
          </label>
          <br/>
          {this.categoryDropdown()}
          <br/>
          <div className="button_div">
            <button type="button" onClick={this.handleSubmit}>Save and Continue</button>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
