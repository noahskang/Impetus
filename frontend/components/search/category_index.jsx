import React from 'react';
import { Link, match, withRouter} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SearchIndexItem from '../search/search_index_item';


const categories = ["Art", "Technology", "Recreation", "Relief Work", "Local", "Overseas", "Music", "Culinary"];

class CategoryIndex extends React.Component{
  constructor(props){
    super(props);
    this.props.fetchProjects();
    this.state={
      categoryProjects: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(e){
  console.log("e", e);
    console.log(e.currentTarget.value);
    e.preventDefault();
    let selectedProjects = this.props.projectArray.filter(project => ( project.category.toLowerCase()===e.currentTarget.value));
    this.setState({
      categoryProjects: selectedProjects
    }, ()=>console.log(this.state));
  }

  render(){
    return(
      <div className = "categories-page">
        <div className="categories-navigation">
          <a className="nav-logo site-nav-item" href="/">
          <h2 id="category-exit-x">X</h2>
          </a>
        </div>
        <div className="category-index-elements">
          <div className="category-index">
          <h1>Categories</h1>
          <div className="category-options">
            {
              categories.map(category => {
              return(<button onClick={this.handleClick} value={category.toLowerCase()} key={category}>{category}</button>);
            })}
          </div>
          </div>
        <div className="projects-index">
          {this.state.categoryProjects.map(project => {
            let user = project.creator || {};
            return (<SearchIndexItem project={project} user={user} key={project.id}/>);
          })}
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryIndex);
