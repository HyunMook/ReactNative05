import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import VideoPlayer from './player';
import VideoController from './controls';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      isLooping: true,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      containerMounted: false,
      containerWidth: null
    };
  }

  componentDidMount() {}
  componentDidUpdate() {
    console.log('cdu-STATE', this.state);
  }

  _onReady = event => {
    this.setState({ isReady: true });
  };
  _onChangeState = event => {
    this.setState({
      status: event.state,
      isPlaying: event.state == 'paused' ? false : this.state.isPlaying
    });
  };
  _onChangeQuality = event => {
    this.setState({ quality: event.quality });
  };
  _onError = event => {
    this.setState({ error: event.error });
  };
  _onChangeFullscreen = event => {
    this.setState({ fullscreen: event.isFullscreen });
  };
  _onProgress = event => {
    this.setState({ duration: event.duration, currentTime: event.currentTime });
  };
  _onPressPlay = () => {
    this.setState(s => ({ isPlaying: !s.isPlaying }));
  };
  _onPressLooping = () => {
    this.setState(s => ({ isLooping: !s.isLooping }));
  };

  render() {
    const { isPlaying, isLooping, fullscreen, status } = this.state;
    const playerState = { isPlaying, isLooping, fullscreen };
    const controllerState = { status, isLooping };
    return (
      <View style={{ flex: 1 }}>
        <VideoPlayer
          playerState={playerState}
          _onReady={this._onReady}
          _onChangeState={this._onChangeState}
          _onChangeQuality={this._onChangeQuality}
          _onError={this._onError}
          _onChangeFullscreen={this._onChangeFullscreen}
          _onProgress={this._onProgress}
        />
        <VideoController
          controllerState={controllerState}
          _onPressPlay={this._onPressPlay}
          _onPressLooping={this._onPressLooping}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({});
