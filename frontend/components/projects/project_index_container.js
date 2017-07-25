import {connect} from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import {fetchUsers} from '../../actions/user_actions';
import ProjectIndex from './project_index';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = ({projects, users}) => {
  return {
    allProjects: selectAllProjects(projects),
    users
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: ()=>dispatch(fetchProjects()),
  getAllUsers: ()=>dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
