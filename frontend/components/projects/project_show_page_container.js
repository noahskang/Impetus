import {connect} from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectShowPage from './project_show_page';
import { selectProject } from '../../reducers/selectors';
import {fetchUsers} from '../../actions/user_actions';
import { values } from 'lodash';

const mapStateToProps = ({projects, users}, {match }) => {
  const projectId = parseInt(match.params.projectId);
  let project = projects[projectId] || {};
  let user = users[project.creator_id] || {};
  return{
    project,
    user
  };
};


const mapDispatchToProps = (dispatch, {match}) => ({
  getProject: () => dispatch(fetchProject(match.params.projectId)),
  getAllUsers: ()=>dispatch(fetchUsers()),
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ProjectShowPage);
