import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Styles as CommonStyles } from '../Styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    /**
     * push한 scene들이 쌓였을때 메모리등의 문제는 없는가??
     */
    console.log('props', this.props);
  }
  render() {
    return (
      <View style={[CommonStyles['container--ccc'], CommonStyles['bg-1']]}>
        <View style={CommonStyles['container--ccc']}>
          <Text style={CommonStyles.h1}>Study App</Text>
          <Text style={CommonStyles.h5}>Gazuaaa~</Text>
        </View>

        {this.props.user.data.id ? (
          <View style={CommonStyles['container--ccc']}>
            <TouchableOpacity
              onPress={this.props.userLogout}
              style={[CommonStyles.btn, CommonStyles['bg-2']]}
            >
              <Text style={[CommonStyles.h5, CommonStyles['color-white']]}>
                Logout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Actions.video}
              style={[CommonStyles.btn, CommonStyles['bg-2']]}
            >
              <Text style={[CommonStyles.h5, CommonStyles['color-white']]}>
                Video
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={CommonStyles['container--ccc']}>
            <TouchableOpacity
              onPress={Actions.login}
              style={[CommonStyles.btn, CommonStyles['bg-2']]}
            >
              <Text style={[CommonStyles.h5, CommonStyles['color-white']]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Actions.register}
              style={[CommonStyles.btn, CommonStyles['bg-2']]}
            >
              <Text style={[CommonStyles.h5, CommonStyles['color-white']]}>
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Actions.video}
              style={[CommonStyles.btn, CommonStyles['bg-2']]}
            >
              <Text style={[CommonStyles.h5, CommonStyles['color-white']]}>
                Video
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
