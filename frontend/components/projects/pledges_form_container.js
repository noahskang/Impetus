import { connect } from 'react-redux';
import {fetchProject, fetchProjects} from '../../actions/project_actions';
import PledgesForm from './pledges_form';
import { createPledge, receivePledgeErrors} from '../../actions/pledge_actions';

const mapStateToProps = ({errors, projects, session}, {match})=>{
  let projectId = parseInt(match.params.projectId);
  let project = projects[projectId] || {};
  let rewards = project.rewards || [];
  let currentUserId = session.currentUser.id;
  let creator = project.creator || {};
  return{
    errors,
    rewards,
    currentUserId,
    creator,
    project
  };
};

const mapDispatchToProps = (dispatch, {match}) => ({
  createPledge: pledge => dispatch(createPledge(pledge)),
  clearErrors: ()=> dispatch(receivePledgeErrors([])),
  getProject: () => dispatch(fetchProject(match.params.projectId)),
  fetchProjects: () => dispatch(fetchProjects())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgesForm);
