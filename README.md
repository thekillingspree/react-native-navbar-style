# react-native-navbar-style

## Getting started

`$ npm install react-native-navbar-style --save`

### Mostly automatic installation

`$ react-native link react-native-navbar-style`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.tksp.navbarstyle.RNNavbarStylePackage;` to the imports at the top of the file
  - Add `new RNNavbarStylePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-navbar-style'
  	project(':react-native-navbar-style').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-navbar-style/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-navbar-style')
  	```


## Usage
```javascript
import RNNavbarStyle from 'react-native-navbar-style';

// TODO: What to do with the module?
RNNavbarStyle;
```
  