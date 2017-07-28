import { connect } from 'react-redux';
import { push } from 'react-router-dom';

import { login, logout, signup, receiveSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors

});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user=>dispatch(processForm(user)),
    login: user=> dispatch(login(user)),
    signup: user=> dispatch(signup(user)),
    clearErrors: ()=>dispatch(receiveSessionErrors([])),
    formType,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
