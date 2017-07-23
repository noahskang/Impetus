import {connect} from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = ({projects}) => {
  return {
    allProjects: selectAllProjects(projects)
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: ()=>dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
