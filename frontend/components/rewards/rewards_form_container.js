import { connect } from 'react-redux';
import RewardsForm from './rewards_form';
import { createReward, receiveRewardErrors} from '../../actions/reward_actions';

const mapStateToProps = ({errors}, {match})=>{
  let projectId = parseInt(match.params.projectId);
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
