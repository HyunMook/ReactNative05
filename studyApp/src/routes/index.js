import React from 'react';
import {
  Actions,
  Scene,
  Router,
  TabBar,
  Modal,
  Schema,
  Reducer,
  ActionConst
} from 'react-native-router-flux';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register/main';
import Video from '../components/Video';

const Scenes = Actions.create(
  <Scene key="modal" component={Modal}>
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" direction="vertical" hideNavBar={false} title="Login">
        <Scene
          key="loginModal"
          component={Login}
          hideNavBar={true}
          schema="modal"
        />
      </Scene>
      <Scene
        key="register"
        hideNavBar={false}
        title="Register"
        direction="vertical"
      >
        <Scene
          key="registerModal"
          component={Register}
          schema="modal"
          hideNavBar={true}
        />
      </Scene>
      <Scene key="video" hideNavBar={false} title="Video" direction="vertical">
        <Scene
          key="videoModal"
          component={Video}
          schema="modal"
          hideNavBar={true}
        />
      </Scene>
      <Scene key="home" component={Home} hideNavBar={true} initial={true} />
    </Scene>
  </Scene>
);

export default Scenes;
