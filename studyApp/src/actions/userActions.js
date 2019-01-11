export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const ERR_USER = 'ERR_USER';
export const RESET_USER = 'RESET_USER';

const userData = [
  { id: 'admin', pw: '1234', video: true },
  { id: 'test1', pw: '1111', video: true },
  { id: 'test2', pw: '2222', video: false }
];
export function setUser(id, pw) {
  // 패스워드 일치 확인
  for (let user of userData) {
    if (
      user.id.toUpperCase() == id.toUpperCase() &&
      user.pw.toUpperCase() == pw.toUpperCase()
    ) {
      return {
        type: SET_USER,
        payload: { id: id.toUpperCase(), video: user.video }
      };
    }
  }
  return {
    type: ERR_USER,
    // payload: { code: 401, message: `The user '${id}' is not found.` }
    payload: { code: 401, message: `The input is not correct.` }
  };
}

export function resetUser() {
  return { type: RESET_USER };
}
