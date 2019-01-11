import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Styles } from '../Styles';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[Styles['container--ccc'], Styles['bg-0']]}>
        <View style={Styles['container--ccc']}>
          <Text style={Styles.h1}>Study App</Text>
          <Text style={Styles.h5}>register page</Text>
        </View>
        <View style={Styles['container--ccc']}>
          <Button title="Login" onPress={() => Actions.login()} />
          <Button title="Register" onPress={() => Actions.register()} />
          <Button title="Back" onPress={() => Actions.pop()} />
          <Button title="Back to Home" onPress={() => Actions.popTo('home')} />
        </View>
      </View>
    );
  }
}
