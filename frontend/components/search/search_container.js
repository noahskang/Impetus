import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchProjects } from '../../actions/project_actions';


const mapStateToProps = ({projects}, {match}) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchSearchProjects: (query) => dispatch(fetchSearchProjects(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
