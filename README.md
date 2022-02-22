**DemoProject**


**1, Dependencies**
```
 "@react-navigation/native": "^6.0.8",
    "@react-navigation/native-stack": "^6.5.0",
    "react": "17.0.2",
    "react-native": "0.67.2",
    "react-native-safe-area-context": "^3.4.0",
    "react-native-screens": "^3.11.1",
    "react-native-vector-icons": "^9.1.0"
```
**2, Run**

Init first with npm:
`npm i`

If run on iphone please install dependencies via Cocapods: 
`cd ios && pod install`

Run Android:

`react-native run-android` for debug

`react-native run-android --variant=release` for release

Run iOS:

`react-native run-ios` for debug

`react-native run-ios --configuration Release --simulator="iPhone 6s"` for relase

**3, Build**

Debug: use **Run**

Release:

`cd android && ./gradlew assembleRelease` for build APK

`cd android && ./gradlew bundleRelease && cd ../` for bundle file (upload)

Use XCode Archive for relase

**4, Note for dev**

1. Please ask to @Dev.BacNguyen before you want install new library
 
3. All screens (features) will located in src/screens. If not found, you can create new

5. You can config new navigator in src/navigation/MainStack
