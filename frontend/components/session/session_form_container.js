import { connect } from 'react-redux';
import { push } from 'react-router-dom';

import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
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
    clearErrors: ()=>dispatch(receiveErrors([])),
    formType,
  };
};
// add both login and create user to the props.
// This facilitates a simply way to log in as guest -- login is always available as a prop.

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
