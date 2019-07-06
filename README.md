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

![Purple Navbar with Light Icon](https://lh3.googleusercontent.com/4GoB2P2x4F-ZyznRVsKXJdNHEqusFTzGSR0-6mHqLZ2zOQLXlUcgoOq8MTjSVDK_fP_rgcvHlqo08uw2JLwZTbN0A5xteZQO2u3fKrFn0_X7vnIm9s9Mxm-U79INhK9CTPxSQ6Q-AKEB9s6n74XaCRN9pzeoCETcjFAg4HGKjtoh5W5Zq12r6370TbIO7F4E0iptH9dkkD2x9eWphIBVMEibujVcEAfryJzpN2_gKI9DcOp5i3uGt18btFCrEBys8yuXopmRPBcVKdmFM3l3X67B1BNlNCnrxUa5p6vzKLDTt0xdWierrQctmC4k8JGkL14lGF76FpJDuPBFBQsSvESc4Qhoa8PG4uEMqE28ER-U1RBz37O_kzJ_zSaA_eyuBxsWymNO1xcUJTYQmxbCOINAyb57EUleMMd8hKsh7LpPOpVvMxf7NZFBzi8SQLiWAw1Z8qCvAnJp65Mw4s7SQ0TbcWrfgoiJTCoN2XT4_tIyVHq9qyu0KwFo_uwmXzANDmCjmOiSkRv_siH2V4udPfEDLe7lmYTlJqN8L7MSBLYzooHYVprUzGLSLL_2XNim6G6Gk3GCP_nWpP5x7hCY6yy5280kls2htGNdww=s1080-w1080-h300-no?.jpg)

```javascript
NavbarStyle.setNavbarColor('#8e44ad');
await NavbarStyle.setLightNavbar(false);
```  

### Light Navbar with dark icons

![Light Navbar with dark Icons](https://lh3.googleusercontent.com/lU145p2ueVKAG5wZy6y314M2bfQnY1JSCnAOfL8IveHOCh_pWnYFb7vDusabWeekZ_fEuBxalH3y1Fs0mLfg1pIPFaO7LP5gglNnF2muRA9EhRjXigByfey---tgwE_cwYEhUkuV34P9f7QsnPa5neXf0xrVtcFt6ThIF_gIgK4jM6lBMybrKTSxsdvG0ruqY3IfsXBAlkNvrH8elZZBIaazQMfUbpm-xDQwuvAb87dc8uwp5asMC2_gShArV1dlnaO7O2wg389snQk1ZMigH-KP6j-PypL7a1Pwx8U2tXTZxN79sOmhUgO0vAE7tRjXfNstpNoO_qj6XPRq4avaYMiIx31dnYQwArwT0okkFm0kogvetMOsUPAbn-ES_aI9l9DgTPPEA9LFqZEMoedLszU8rqBDezU1iZxTiKVGHAEOZgNZlWgL-96ic8LrgcaIyQ305kXU5Y6bwoBM26l-t9XAuSYgqMIIyGhrt8I4elzv1c-RGSG3qYIiD0gUI-gfsz4rBgozB7iCufrRjhlPbdMMaIObVU7EW1AsiEcYNINdjYg2SVlOAPhEeysKFcrYRRwY_KYxlxJ1cPaCZpgNpJ616jD7x0Hn2WLvAQ=s1080-w1080-h359-no?.jpg)

```javascript
NavbarStyle.setNavbarColor('#ecf0f1');
await NavbarStyle.setLightNavbar(true);
```  


### Colored Navbar with dark icons

![Colored Navbar with dark Icons](https://lh3.googleusercontent.com/hUNJXRPLLj8eMmejgdOlAlTOIZgMXUqh4_bKR7leWUnm4BDswopt3pABQSuy3a1NN9FsDx04Q4FrvlkqMxDvYAGqagppBYDOW0PIRxNG-7FKhoSTYmzQakIxrU2kcwNabx9JNwUdUaZnGVmrP8xFmu6k8kFdEO0gRiNV3cIDcw52_9sbbU-ruUopo9JKq2NZP0cvyeSinnkJjqfYJ8ipImNctx6qqjTa5TDYVt_cjpBYHnLzivyLGfICCrEjGzcn-SQ6IdFCqnvVrnayxbb5YOMrQNXzwW-wI8E8IwJaEgNh9UBWOnlOgeXTH4dA2FUwrS-DdfU8uULMUnaNDN87IxsmPAG1ivXyL_5czNGyiSvYWl1iNKXj7qQSN4Sqzx_O3An3gbEADCcyutPLj0pDrEy4hRanlH9_7HWbd1DznarJAtw6DM2HOBRRv5Oib3N1rV3JDRqsxZJyu-QNTRi2cVNVXZ6wxRUu3UH8Efv4qqv3kTD15TH4g31glJJi4CFHAJe0cIokD4DjPl3ZPBwLFc_u2S4j_aK-9e9iLV5kBRtMCIJwGyNCuCVuPkVojXkqX-xtTcE7A4Bsde4R8F-v2YbEIjD3qOnzaTkrfw=s1080-w1080-h362-no?.jpg)

```javascript
NavbarStyle.setNavbarColor('#16a085');
await NavbarStyle.setLightNavbar(true);
```  
