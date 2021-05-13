import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform, Image} from 'react-native';
import {
  AccessToken,
  // AuthenticationToken,
  LoginButton,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import {COLORS} from '../common/Colors';
import Header from '../common/Header';

export class FacebookLogin extends Component {
  state = {userInfo: {}};

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name, first_name, last_name, email,picture',
        //'email', 'user_friends', 'public_profile','user_likes',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          this.setState({userInfo: result});
          console.log('result:', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  render() {
    const {userInfo} = this.state;
    return (
      <>
        <Header
          title={'Facebook Login'}
          MenuDrawerButton
          headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
          titleStyle={{color: COLORS.WHITE}}
        />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Facebook Login Screen</Text>
          {Object.keys(userInfo).length > 0 && (
            <View style={{marginBottom: 15}}>
              <Image
                source={{uri: userInfo.picture.data.url}}
                style={{height: 100, width: 100}}
              />
              <Text>Logged in As {userInfo.name}</Text>
              <Text>Email: {userInfo.email}</Text>
            </View>
          )}

          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  const accessToken = data.accessToken.toString();
                  this.getInfoFromToken(accessToken);
                });
              }
            }}
            onLogoutFinished={() => this.setState({userInfo: {}})}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({});
