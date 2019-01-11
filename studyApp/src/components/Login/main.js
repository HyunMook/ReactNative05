import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors, Styles as CommonStyles } from '../Styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', pw: '' };
  }
  componentDidMount() {
    // console.log('props', this.props);
  }
  componentDidUpdate() {
    // console.log('sateeeeee', this.state);
    const isLogin = this.props.user.data.id || false;
    if (isLogin) {
      Actions.home();
    }
    if (this.props.user.error.code > 200) {
      alert(this.props.user.error.message);
      this.props.userReset();
    }
  }
  _login = () => {
    if (this.state.id && this.state.pw) {
      this.props.userLogin(this.state.id, this.state.pw);
    } else {
      alert('Insert ID/PW.');
    }
  };
  _typeID = text => {
    this.setState({ id: text });
  };
  _typePW = text => {
    this.setState({ pw: text });
  };
  render() {
    return (
      <View style={[CommonStyles['container--ccc'], CommonStyles['bg-0']]}>
        <View style={Styles.tiBox}>
          <TextInput
            style={[CommonStyles['ti--default']]}
            placeholder="ID"
            onChangeText={this._typeID}
          />
        </View>
        <View style={Styles.tiBox}>
          <TextInput
            style={[CommonStyles['ti--default']]}
            placeholder="Password"
            onChangeText={this._typePW}
            secureTextEntry
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity
          style={[CommonStyles['bg-2'], CommonStyles.btn]}
          onPress={this._login}
        >
          <Text style={[CommonStyles['color-white'], CommonStyles.h6]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  tiBox: {
    width: '100%',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});
