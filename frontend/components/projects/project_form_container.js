import {connect} from 'react-redux';
import { createProject, receiveProjectErrors } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = ({errors, session}) => ({
  errors,
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  clearErrors: ()=>dispatch(receiveProjectErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
