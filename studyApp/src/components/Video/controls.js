import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Styles as CommonStyles } from '../Styles';

const VideoController = props => {
  return (
    <View style={[CommonStyles['container--rcc'], CommonStyles.btnWrapper]}>
      <TouchableOpacity
        style={[CommonStyles.btn, CommonStyles['bg-2']]}
        onPress={props._onPressPlay}
      >
        <Text style={[CommonStyles.h5, CommonStyles['color-white']]}>
          {props.controllerState.status == 'playing' ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          CommonStyles.btn,
          CommonStyles['bg-2'],
          CommonStyles['color-white']
        ]}
        onPress={props._onPressLooping}
      >
        <Text style={[CommonStyles.h5, CommonStyles['color-white']]}>
          {props.controllerState.isLooping ? 'Looping' : 'Not Looping'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoController;
