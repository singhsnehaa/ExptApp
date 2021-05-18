# Steps for adding **Splash Screen**

- Create React-native-project
- install `react-native-bootsplash` Library
- Generate different sizes of image/logo for splash screen using `terminal`
- Little configuration required as mentioned on [docs](https://www.npmjs.com/package/react-native-bootsplash)
- Hide splash screen

## Step 1

Create `React-native-cli project` using command :-

```
npx react-native-init SplashScreen
```

## Step 2

Install `npm install react-native-bootsplash --save` library [from here](https://www.npmjs.com/package/react-native-bootsplash)

```
npm install react-native-bootsplash --save
```

## Step 3

Generate different sizes of logo for splash screen using `terminal`

```
yarn react-native generate-bootsplash src/assets/logo.png
```

## Step 4 FOR ANDROID

Configure project as docs

1.  Edit the **_android/app/src/main/java/com/yourprojectname/MainActivity.java_**

    ```
    import android.os.Bundle; <-- add this line
    import com.facebook.react.ReactActivity; <-- already added by default
    import com.zoontek.rnbootsplash.RNBootSplash; <-- add this line
    ```

    ```
    ...
    // add this override method block inside your MainActivity Class
    @Override
      protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        RNBootSplash.init(R.drawable.bootsplash, MainActivity.this);
      }
      ...
    ```

2.  Edit the **_android/app/src/main/res/values/styles.xml file:_**

    ```
    ...
    // add this style block inside <resources> tag
    <style name="BootTheme" parent="AppTheme">
        <item name="android:background">@drawable/bootsplash</item>
    </style>
    ...
    ```

3.  Edit the android/app/src/main/AndroidManifest.xml file:

    ```
    // this activity tag is already present by default, just need to add new attribute and remove the intent-filter from here.
    <activity
      android:name=".MainActivity"
      android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
      android:label="@string/app_name"
      android:windowSoftInputMode="adjustResize"
      android:exported="true" <-- add this attribute
      android:launchMode="singleTask">
      <!-- ⚠️ add android:exported="true" and android:launchMode="singleTask" above -->
      <!-- remove the <intent-filter> from .MainActivity -->
    </activity>

    // add this activity tag block
    <activity
      android:name="com.zoontek.rnbootsplash.RNBootSplashActivity"
      android:theme="@style/BootTheme"
      android:launchMode="singleTask">
      <intent-filter> <-- this intent filter is moved from above activity tag block
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>
    ```

## Step 4 FOR IOS

1. Follow the Step 1 to 3. and then update your Pod using command line `cd ios && pod install && cd ..`

2. First, open the project in Xcode. Open a command line and from the project root and run
   `open ios/[project_name].xcworkspace`

3. open the file `AppDelegate.m` file. then add peace of code `#import “SplashScreen.h"` above the `#ifdef FB_SONARKIT_ENABLED ` (if #ifdef FB_SONARKIT_ENABLED is not available in file then place any where) and then lastly add `[RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView];` just above `return YES;` in the didFinishLaunchingWithOptions method

4. Set the `BootSplash.storyboard` as launch screen file: it is downloaded when generate BootSplash plugin install you just do
   a. Right click on root Project & Drag and drop the file.
   b. Create folder reference and finish. then it will show on your projects.

5. Set as Launch Screen File. go to main project target and select `general` tab and click on `App Icon and Lounch Image` then select `Lounch Screen File name : BootSplash`.

6. now clean, Build and Run the project.

## Step 5 in your screen

Hide splash screen

```
...
import RNBootSplash from "react-native-bootsplash";
...

// on mount
useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
}, []);
```

# Change Background Color OR add background image on splash screen [`Optional`]

### Change background color

Edit the **_android/app/src/main/res/values/colors.xml_** file:

```
...
// add the color you want to show in splash screen background
<color name="pink">#FFC0CB</color>
...
```

And then,
Edit the **_android/app/src/main/res/drawable/bootsplash.xml_** file

```
// add this <item> tag inside <layer-list> tag
...
<item android:drawable="@color/pink" /> <-- mention color name here
...
```

### Add background image

Add image you want to show on splash in **_android/app/src/main/res/drawable_** folder

And then,
Edit the **_android/app/src/main/res/drawable/bootsplash.xml_** file

```
// add this <item> tag inside <layer-list> tag
...
<item android:drawable="@drawable/bg_img" /> mention image name here (no need to add extension)
...
```
