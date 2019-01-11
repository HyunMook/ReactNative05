import Video from './main';
import { connect } from 'react-redux';

// props 값으로 넣어 줄 상태를 정의
const mapStateToProps = state => {
  // console.log('mapStateToProps-state:', state);
  return {};
};
// props 값으로 넣어 줄 액션 함수들을 정의
const mapDispatchToProps = dispatch => {
  return {};
};
const VideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);

export default VideoContainer;
