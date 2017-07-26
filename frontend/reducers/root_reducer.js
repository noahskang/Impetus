import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import UsersReducer from './users_reducer';
import RewardsReducer from './rewards_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  users: UsersReducer,
  rewards: RewardsReducer
});

export default RootReducer;
