import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SearchIndex from './search_index';
import { fetchSearchProjects } from '../../actions/project_actions';
import { values } from 'lodash';


const mapStateToProps = ({projects}, {match}) => {
  let projectList = Object.values(projects);
  return{
    projectList,
    match
  };
};

const mapDispatchToProps = (dispatch, {match}) => ({
  fetchSearchProjects: () => dispatch(fetchSearchProjects(match.params.query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
