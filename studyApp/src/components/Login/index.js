import Login from './main';
import * as userActions from '../../actions/userActions';
import { connect } from 'react-redux';

// props 값으로 넣어 줄 상태를 정의
const mapStateToProps = state => {
  // console.log('mapStateToProps-state:', state);
  return {
    user: state.user
  };
};
// props 값으로 넣어 줄 액션 함수들을 정의
const mapDispatchToProps = dispatch => {
  return {
    userLogin: (id, pw) => dispatch(userActions.setUser(id, pw)),
    userReset: () => dispatch(userActions.resetUser())
  };
};
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
