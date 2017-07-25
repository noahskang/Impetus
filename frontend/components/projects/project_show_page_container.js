import {connect} from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectShowPage from './project_show_page';
import { selectProject } from '../../reducers/selectors';


const mapStateToProps = ({projects}, {match }) => {
  const projectId = parseInt(match.params.projectId);
  return{
    projectId,
    project: projects
  };
};


const mapDispatchToProps = (dispatch) => ({
  getProject: (id) => dispatch(fetchProject(id))
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ProjectShowPage);
