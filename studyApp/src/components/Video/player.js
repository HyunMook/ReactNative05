import React from 'react';
import YouTube from 'react-native-youtube';
import API_KEY from '../../api/key';

const VideoPlayer = props => {
  return (
    <YouTube
      apiKey={API_KEY}
      videoId="4wNI4ZNqN2c" // The YouTube video ID
      play={props.playerState.isPlaying}
      loop={props.playerState.isLooping}
      fullscreen={props.playerState.fullscreen}
      controls={0}
      onReady={props._onReady}
      onChangeState={props._onChangeState}
      onChangeQuality={props._onChangeQuality}
      onError={props._onError}
      onChangeFullscreen={props._onChangeFullscreen}
      onProgress={props._onProgress}
      style={{
        flex: 1,
        marginVertical: 10,
        height: '100%'
      }}
    />
  );
};

export default VideoPlayer;
