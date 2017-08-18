import { connect } from 'react-redux';
import RewardsForm from './rewards_form';
import { createReward, receiveRewardErrors} from '../../actions/reward_actions';

const mapStateToProps = ({rewards}, {match})=>{
  let projectId = parseInt(match.params.projectId);
  let errors = rewards.errors;
  return{
    errors,
    projectId
  };
};

const mapDispatchToProps = (dispatch) => ({
  createReward: reward => dispatch(createReward(reward)),
  clearErrors: ()=> dispatch(receiveRewardErrors([]))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardsForm);
