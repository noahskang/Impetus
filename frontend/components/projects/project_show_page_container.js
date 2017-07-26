import {connect} from 'react-redux';
import { fetchProject, destroyProject } from '../../actions/project_actions';
import { fetchRewards } from '../../actions/reward_actions';
import ProjectShowPage from './project_show_page';
import { selectProject, selectProjectRewards } from '../../reducers/selectors';
import {fetchUsers} from '../../actions/user_actions';
import { values } from 'lodash';

const mapStateToProps = ({projects, users, session, rewards}, {match}) => {
  const projectId = parseInt(match.params.projectId);
  let project = projects[projectId] || {};
  let creatorId = project.creator_id || {};
  let currentUser = session.currentUser || {};
  let user = users[creatorId] || {};
  let rewardArray = project.rewards || [];
  return{
    project,
    creatorId,
    projectId,
    user,
    currentUser,
    rewardArray
  };
};

const mapDispatchToProps = (dispatch, {match}) => ({
  getProject: () => dispatch(fetchProject(match.params.projectId)),
  getAllUsers: ()=>dispatch(fetchUsers()),
  destroyProject: ()=>dispatch(destroyProject(match.params.projectId)),
});
// getAllRewards: ()=>dispatch(fetchRewards())

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ProjectShowPage);
