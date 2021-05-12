import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {COLORS} from '../common/Colors';
import Header from '../common/Header';

export function SigninGoogle() {
  const [userInfo, setUserInfo] = useState(null);
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  useEffect(() => {
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Generated from Firebase console
      webClientId:
        '20654916724-uf9f3uvd06jn7cjtnakoptec007ukidq.apps.googleusercontent.com',
      offlineAccess: true,
    });
    // Check if user is already signed in
    _isSignedIn();
  }, []);

  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      // Set User Info if user is already signed in
      _getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
    setGettingLoginStatus(false);
  };

  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      console.log('User Info --> ', info);
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Unable to get user's info");
        console.log("Unable to get user's info");
      }
    }
  };

  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      setUserInfo(userInfo);
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
    setGettingLoginStatus(false);
  };

  return (
    <>
      <Header
        title={'Google SignIn'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.titleText}>Example of Google Sign In</Text>

        {gettingLoginStatus ? (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <>
            {userInfo !== null ? (
              <>
                <Image
                  source={{uri: userInfo.user.photo}}
                  style={styles.imageStyle}
                />
                <Text>Name: {userInfo.user.name}</Text>
                <Text>Email: {userInfo.user.email}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={_signOut}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              </>
            ) : (
              <GoogleSigninButton
                style={{width: 312, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={_signIn}
              />
            )}
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 30,
  },
});
