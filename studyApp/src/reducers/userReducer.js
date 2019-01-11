import {
  SET_USER,
  GET_USER,
  ERR_USER,
  RESET_USER,
  setUser
} from '../actions/userActions';

const initialState = {
  data: {
    id: '', // 로그인한 유저 ID
    video: false // 영상 접근 권한
  },
  error: { code: 0, message: '' }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case SET_USER:
      return {
        data: action.payload,
        error: { code: 200, message: 'Success' }
      };

    case ERR_USER:
      return {
        ...state, //login 유지
        error: action.payload
      };

    case RESET_USER:
      return initialState;

    default:
      return state;
  }
}
