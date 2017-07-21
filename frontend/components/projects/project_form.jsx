import React from 'react';
import { Route, withRouter, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import TextareaAutosize from 'react-autosize-textarea';

class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: "",
      description: "",
      category: "",
      funding_goal: undefined,
      end_date: undefined,
      website_url: "",
      creator_id: this.props.user.id
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
    const project = Object.assign({}, this.state);
    this.props.createProject(project);
  }

  categoryDropdown(){
    return(
      <label>Category
        <select name="categories" onChange={this.update('category')}>
          <option value="Local">Art</option>
          <option value="Relief Work">Relief Work</option>
          <option value="Local">Local</option>
          <option value="Overseas">Overseas</option>
          <option value="Music">Music</option>
        </select>
      </label>
    );
  }

  formIncomplete(){
    return(Object.values(this.state).includes(""));
  }

  render(){
    return(
      <div className="project-form-page">
        <ReactCSSTransitionGroup
          transitionName="fade-div"
          transitionAppear={true}
          transitionAppearTimeout={700}
          transitionEnter={false}
          transitionLeave={false}
          >
          <div id="project-form-contents" hidden>
          <div className="project-form-head">
            <div className = "hero-head">
              <h3>let's get started</h3>
              <h1>NEW PROJECT</h1>
            </div>
            <h2>Make a great first impression with your project's title and image, and set your funding goal, campaign duration, and project category. No worries if you make a mistake - you can always edit your project later.</h2>
          </div>
          <form className="project-form">
            <label>Title
              <input
                value={this.state.title}
                type="text" placeholder="Web Cleanup" onChange={this.update('title')}/>
            </label>
            <label>Website URL
              <input
                value={this.state.website_url}
                type="text" placeholder="google.com" onChange={this.update('website_url')}/>
            </label>
            <label>Description
              <TextareaAutosize
                value={this.state.description}
                type="text" placeholder="Support my efforts to clean up the stray webs left all around Brooklyn." onChange={this.update('description')}/>
            </label>
            {this.categoryDropdown()}
            <label>Funding Goal ($)
              <input
                value={this.state.funding_goal} type="number" placeholder="0" onChange={this.update('funding_goal')}/>
            </label>
            <label>End Date
              <input type="date"
                value={this.state.end_date}
                onChange={this.update('end_date')}/>
            </label>
            <div className="submit_div">
              <button type="button" onClick={this.handleSubmit} disabled={this.formIncomplete() ? "disabled" : ""}>Save and Continue</button>
            </div>
          </form>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
