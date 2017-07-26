import {connect} from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import UserProjectsIndex from './user_projects';
import { selectUserProjects } from '../../reducers/selectors';
import { values } from 'lodash';

const mapStateToProps = ({projects, session}) => {
  let userProjects = selectUserProjects(projects, session.currentUser);
  return{
    userProjects
  };
};

const mapDispatchToProps = (dispatch, {match}) => ({
  getAllProjects: () => dispatch(fetchProjects()),
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(UserProjectsIndex);
