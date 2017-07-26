import React from 'react';
import { Route, withRouter, history, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import TextareaAutosize from 'react-autosize-textarea';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'bsboi6te';
const  CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/noah-s-kang/upload";


class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: "",
      description: "",
      category: "",
      funding_goal: "",
      end_date: "",
      website_url: "",
      creator_id: this.props.user.id,
      image_url: "filler",
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
    this.props.createProject(project).then(()=>this.props.history.push("/"));
    this.props.clearErrors();
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

  formComplete(){
    if(Object.values(this.state).includes("")){
      return false;
    } else if (this.state.funding_goal > 2147483647) {
      return false;
    }
    return true;
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
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
            <h2 id="dropzone-section-label">Image</h2>
            <div id="dropzone-section">
              <Dropzone id="dropzone"
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload</p>
              </Dropzone>
              <div>
                {this.state.image_url === 'filler' ? null :
                (<div>
                  <img src={this.state.image_url} />
                </div>)}
              </div>
            </div>
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
              <button type="button" onClick={this.handleSubmit} disabled={this.formComplete() ? "" : "disabled"}>Save and Continue</button>
            </div>
          </form>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default withRouter(ProjectForm);

// {this.formComplete() ?
//   <a>Save and Continue</a> : <Link to="/" activeClassName="active" onClick={this.handleSubmit}>Save and Continue</Link>
// }
