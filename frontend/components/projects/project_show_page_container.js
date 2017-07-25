import {connect} from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectShowPage from './project_show_page';
import { selectProject } from '../../reducers/selectors';


const mapStateToProps = ({projects, users}, {match }) => {
  const projectId = parseInt(match.params.projectId);
  return{
    projectId,
    projects,
    users
  };
};


const mapDispatchToProps = (dispatch) => ({
  getProject: (id) => dispatch(fetchProject(id))
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ProjectShowPage);
