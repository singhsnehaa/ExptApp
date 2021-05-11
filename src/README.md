# ExptApp

# Steps for Google Auth Login with Firebase

- Create React-native-project
- install google-login plugin
- Generate SHA-1 Key
- setup firebase
- configure android/build.gradle & android/app/build.gradle file
- download google-service.json file and add it to android/app folder
- create component and write google-login code as mentioned on docs

## Step 1

Create `React-native-cli project` using command :-

```
npx react-native-init GoogleLogin
```

## Step 2

Install `@react-native-google-signin/google-signin` plugin

```
npm i @react-native-google-signin/google-signin
```

## Step 3

Generate `SHA-1` key from **command line** and store it somewhere.

```
keytool -list -v -keystore "/users/mac/ExptApp/android/app/debug.keystore" -alias androiddebugkey -storepass android -keypass android
```

## Step 4 FOR ANDROID

Setup Firebase

1. Go to `https://console.firebase.google.com` Login and create new project
2. Select android tab and add this with the project
   - give package name (available at android/app/build.gradle file)
   - add SHA-1 key
   - configure android/build.gradle && android/app/build.gradle file as given.
   - enable google-login functionality from Authentication tab in firebase.
   - get the web-client-id and secret-key from here and store it somewhere
   - download google-service.json file and add it place to android/app folder.

## Step 4 FOR IOS

setup inside in xcode

> install the Google Signin SDK with CocoaPods: add pod 'GoogleSignIn', '~> 5.0.2' in your Podfile and run pod install

> Go to main project directory and select Build Phase tab and check Link Binary with Libraries dependencis should be linked like libPods-ExptApp.a

> Go to main project directory and select info tab and click URL Types

> add a URL with scheme set to your REVERSED_CLIENT_ID (found inside GoogleService-Info.plist)

Setup Firebase

1. Go to `https://console.firebase.google.com` login and go to **Project Overview** if you already have created project for android other wise you need to create new project.
2. Select IOS tab and add this with the project
   a. Register App, give IOS Bundle Identifier (You can find your Bundle Identifier in the General tab for your app's primary target in Xcode) and click Register App for next

   b. download and add GoogleService-info.plist into your project(open project in Xcode and Please click on the main project directory for the options and click Add Files… and Please select the downloaded GoogleService-info.plist and click to add.After that, you will see the downloaded file in the main folder of your project) click Next

   c. Add Firebase SDK and Add pod 'Firebase/Analytics' in Podfile. then next

   d. Add initialization code (Make some changes in AppDelegate.m file, Please note we have to add Objective-C code

   > @import Firebase; (at the top)
   > [FIRApp configure] (under the - (BOOL)application:(UIApplication _)application didFinishLaunchingWithOptions:(NSDictionary _)launchOptions
   > { [FIRApp configure]})
   > )

   e. Next, Continue to next Step

3. Install the pod (cd ios && pod install && cd ..)
4. enable google functionality from Authentication tab in firebase.
5. get the web-client-id and secret-key from here and store it somewhere

## Step 5

Create component and write google-login code as mentioned on docs

## To accomplish this project you may follow also:

`https://www.npmjs.com/package/@react-native-google-signin/google-signin`
