import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchProjects } from '../../actions/project_actions';
import { values} from 'lodash';

const mapStateToProps = ({projects}) => {
  let projectArray = Object.values(projects);
  return {
  projectArray
};};

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);
