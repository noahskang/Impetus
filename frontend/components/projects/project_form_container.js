import {connect} from 'react-redux';
import { createProject, receiveErrors } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = ({errors, session}) => ({
  errors,
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  clearErrors: ()=>dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
