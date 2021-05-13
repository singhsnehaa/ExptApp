# Steps for **Facebook OAuth Login** (without firebase)

- Create React-native-project
- install `react-native-fbsdk` Library
- Create app in [fb dev console](https://developers.facebook.com)
- Create new component and attach code as given on [docs](https://www.npmjs.com/package/react-native-fbsdk)
- clean gradlew and boot app

## Step 1

Create `React-native-cli project` using command :-

```
npx react-native-init FBOAuthLogin
```

## Step 2

Install `npm i react-native-fbsdk` library [from here](https://www.npmjs.com/package/react-native-fbsdk)

```
npm install react-native-fbsdk --save
```

## Step 3 FOr ANDROID

Create app at facebook developer console.

1. Go to **fb dev console** [getting started guide](https://developers.facebook.com/docs/android/getting-started) and click `Quick Start for Android` button
2. Give your `App Name` and click `Create New Facebook App Id` button.
3. Click `My Apps` tab from header. Select your app you've just created.
4. Go to `Add a Product` section and choose `Facebook Login` box and click `set up` button and select `Android` option.
5. Here you'll get `1 to 10 steps` to follow, but we'll only care about `2 to 6`

- (2) . copy the necessary code and attatch it on your file as mentioned.
- (3) . give your app `package name` and `package name with MainActivity`.
- (4) . Generate `Development Key Hash` and add to `key hash` input box

```
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
// when propmpt for password, give 'android'
```

- (5) . Enable Single Sign on to `YES`.
- (6) . copy the necessary code and attatch it to your AndroidMenifest.xml file as mentions on docs.

6. Click `Settings` tab from left sidebar and select `Basic` option

- add privacy policy url, though this is optional and click the save button

7. toggle the `in development` button from header and make it `live`

## Step 3 FOr IOS

1. Go to **fb dev console** [getting started guide](https://developers.facebook.com/docs/ios/use-cocoapods) and click `A Facebook Developer Account` button and open Register box accept & click next,(a). select anything which you describe best I select Developer. then create First App, (b). Select app Type I select none then Continue (c).write Display name and Email & click on create App. (d). click your Security and submit.

2. Congratus ! now your App Id is created, its shown in Header.

3. Go to `Add a Product` section and choose `Facebook Login` box and click `set up` button and select `IOS` option.

4. Here you'll get `1 to 9 steps` to follow.one by one and complete all.

5. toggle the `in development` button from header and make it `live`

6. cd ios && pod install

7. If you have already completed for Android setup so no worry for IOS you got your App Id. (a).Click `My Apps` tab from header. Select your app you've just created. (b). Go to leftside bar of Basic Settings and add platform IOS . You have to add Bundle identifier of your app. You can find Bundle identifier in Xcode General Tab. (c). toggle yes for Single Sign on (d).then hit Save change. (e). follow above step 4 & 6.

## Step 4

Create new component and attach code as given on [docs](https://www.npmjs.com/package/react-native-fbsdk-next)

```
...
import {
  LoginButton,
  AccessToken,
  AuthenticationToken
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
...

...
const getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name, email, first_name, friends, last_name, picture',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          console.log('result:', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };
...

// on render
...
        <LoginButton
            onLoginFinished={async (error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                if (Platform.OS === 'ios') {
                  AuthenticationToken.getAuthenticationTokenIOS().then(data => {
                    console.log(data?.authenticationToken);
                    const authIOSToken = data?.accessToken.toString();
                    this.getInfoFromToken(authIOSToken);
                  });
                } else {
                  AccessToken.getCurrentAccessToken().then(data => {
                    const accessToken = data?.accessToken.toString();
                    console.log(data?.accessToken.toString());
                    this.getInfoFromToken(accessToken);
                  });
                }
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
            loginTrackingIOS={'limited'}
            nonceIOS={'my_nonce'}
          />
...
```

## Step 5

Clean the gradle and reboot your app

```
cd android && ./gradlew clean && cd ..
npm start
npm run android
```

## for reference follow this guide

`https://mehrankhandev.medium.com/integrating-fbsdk-facebook-login-in-react-native-7b7600ce74a7`

`https://www.npmjs.com/package/react-native-fbsdk-next`
