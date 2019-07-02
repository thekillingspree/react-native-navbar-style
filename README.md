# React Native Navbar Style

 React Native Navbar Style is a [react-native](http://facebook.github.io/react-native/) library for styling the bottom navigation bar on Android devices.


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

## Requirements
 
Changing the NavigationBar color is only supported on Android Lollipop(API 21) and above.
Changing the NavigationBar theme (light or dark) is supported only on Android Oreo(API 26) and above.

## Usage

Importing

```javascript
import NavbarStyle from 'react-native-navbar-style';
```

Changing color - setNavBarColor(color)

```javascript
NavbarStyle.setNavbarColor('#16a085');
```

Changing Theme - setLightNavbar(isLight)

```javascript
//Makes the navigation bar icons dark.
//This is suitable for light navbar colors.
await NavbarStyle.setLightNavbar(true);

//Normal Navbar(Light Icons)
await NavbarStyle.setLightNavbar(false);
```  


## Examples

### Colored Navbar with Light Icons

![Purple Navbar with Light Icon](https://bit.ly/2Yuf9wK)

```javascript
NavbarStyle.setNavbarColor('#8e44ad');
await NavbarStyle.setLightNavbar(false);
```  

### Light Navbar with dark icons

![Light Navbar with dark Icons](https://bit.ly/2Nt9tSr)

```javascript
NavbarStyle.setNavbarColor('#ecf0f1');
await NavbarStyle.setLightNavbar(true);
```  


### Colored Navbar with dark icons

![Colored Navbar with dark Icons](https://bit.ly/2XeClgL)

```javascript
NavbarStyle.setNavbarColor('#16a085');
await NavbarStyle.setLightNavbar(true);
```  
