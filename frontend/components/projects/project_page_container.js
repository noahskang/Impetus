import {connect} from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectPage from './project_page';
import { selectProject } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const projectId = parseInt(match.params.projectId);
  // const project = selectProject(state, projectId);
  return{
    projectId,
    project: state.projects
  };
};


const mapDispatchToProps = (dispatch) => ({
  getProject: (id) => dispatch(fetchProject(id))
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ProjectPage);
