import React from 'react';
import { Link, match, withRouter} from 'react-router';
import SearchIndexItem from './search_index_item';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    props.fetchSearchProjects();
  }

  render(){
    return(
      <div className = "search-results-page">
        <div className = "search-results">
        <div className="search-nav-links animated fadeIn">
          <a className="nav-logo site-nav-item" href="/">
            <img className="logo" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1501268718/impetus_logo_white_light_j8dbpb.svg"/>
          </a>
          <a className="nav-logo site-nav-item" href="/">
            <h2 id="exit-x">X</h2>
          </a>
        </div>
        <div className = "query-head animated fadeInUpBig">
          <h2>EXPLORE</h2>
          <h3>{this.props.projectList.length > 0 ? "check out these awesome projects related to your query:" : "No projects match your search query. Try a new search"}</h3>
          <h1>{this.props.match.params.query}</h1>
        </div>
        <div className="search-index-section animated fadeInUpBig">
          <div className="projects-index">
            {this.props.projectList.map(project => {
              let user = project.creator || {};
              return (<SearchIndexItem project={project} user={user} key={project.id}/>);
            })}
          </div>
       </div>
       </div>
      </div>
    );
  }
}
//
// <ReactCSSTransitionGroup
//   transitionName="fade-div"
//   transitionAppear={true}
//   transitionAppearTimeout={700}
//   transitionEnter={false}
//   transitionLeave={false}
//   >
// <Link to="/">X</Link>
export default SearchIndex;
