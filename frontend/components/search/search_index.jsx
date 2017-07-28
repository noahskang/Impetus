import React from 'react';
import { Link, match, withRouter} from 'react-router';
import { fetchSearchProjects } from '../../actions/project_actions';
import ProjectIndexItem from '../projects/project_index_item';

class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    fetchSearchProjects(this.props.match.params.query);
  }
  
  render(){
    return(
      <div className = "search-results">
        <h1>TEST SEARCH PAGE</h1>
          <div className="projects-index-section">
            <h1>Featured Projects:</h1>
            <div className="projects-index">
              {this.props.projectList.map(project => {
                let user = project.creator || {};
                return (<ProjectIndexItem project={project} user={user} key={project.id}/>);
              })}
            </div>
         </div>
      </div>
    );
  }
}

// <Link to="/">X</Link>
export default SearchIndex;
