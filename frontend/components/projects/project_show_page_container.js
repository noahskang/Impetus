import {connect} from 'react-redux';
import { fetchProject, destroyProject } from '../../actions/project_actions';
import { fetchRewards } from '../../actions/reward_actions';
import ProjectShowPage from './project_show_page';
import { selectProject, selectProjectRewards} from '../../reducers/selectors';
import {fetchUsers} from '../../actions/user_actions';
import { values } from 'lodash';
import { createPledge } from '../../actions/pledge_actions';

const rewardSum = rewards => {
  let sum = 0;
  rewards.forEach(reward=>{
    sum+=(reward.pledge_count*reward.amount);
  });
  return sum;
};

const mapStateToProps = ({projects, users, session, rewards, pledges}, {match, location}) => {
  const projectId = parseInt(match.params.projectId);
  let project = projects[projectId] || {};
  let creatorId = project.creator_id || {};
  let currentUser = session.currentUser || {};
  let userRewards = currentUser.rewards || [];
  let user = users[creatorId] || {};
  let rewardArray = Object.values(rewards) || [];
  project.funding_raised = rewardSum(rewardArray);
  return{
    project,
    creatorId,
    projectId,
    user,
    currentUser,
    userRewards,
    rewardArray,
    location
  };
};

const mapDispatchToProps = (dispatch, {match}) => ({
  getProject: () => dispatch(fetchProject(match.params.projectId)),
  createPledge: pledge => dispatch(createPledge(pledge)),
  getAllRewards: () => dispatch(fetchRewards(match.params.projectId)),
  getAllUsers: ()=>dispatch(fetchUsers()),
  destroyProject: ()=>dispatch(destroyProject(match.params.projectId)),
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ProjectShowPage);
