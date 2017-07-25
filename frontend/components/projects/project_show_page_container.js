import {connect} from 'react-redux';
import { fetchProject, destroyProject } from '../../actions/project_actions';
import ProjectShowPage from './project_show_page';
import { selectProject } from '../../reducers/selectors';
import {fetchUsers} from '../../actions/user_actions';
import { values } from 'lodash';

const mapStateToProps = ({projects, users, session}, {match }) => {
  const projectId = parseInt(match.params.projectId);
  let project = projects[projectId] || {};
  let currentUser = session.currentUser;
  let user = users[project.creator_id] || {};
  return{
    project,
    user,
    currentUser
  };
};


const mapDispatchToProps = (dispatch, {match}) => ({
  getProject: () => dispatch(fetchProject(match.params.projectId)),
  getAllUsers: ()=>dispatch(fetchUsers()),
  destroyProject: ()=>dispatch(destroyProject(match.params.projectId))
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ProjectShowPage);
