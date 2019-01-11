import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Styles, Colors } from './Styles';

const Loading = () => (
  <View style={[Styles['container--ccc'], Styles['bg-2']]}>
    <ActivityIndicator color={Colors[0]} size="large" />
    <Text style={[Styles['h4'], Styles['color-white']]}>Loading...</Text>
  </View>
);

export default Loading;
