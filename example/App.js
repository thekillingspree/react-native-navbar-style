import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import NavbarStyle from 'react-native-navbar-style';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  setLightbar = () => {
    NavbarStyle.setLightNavbar(true);
  }
  setDarkbar = () => {
    NavbarStyle.setLightNavbar(false);
  }

  onChangeNavBarColor = () => {
    const colors = ["#e74c3c", "#8e44ad", "#16a085", "#ecf0f1", "#2c3e50"]
    NavbarStyle.setNavbarColor(colors[Math.floor(Math.random() * 5)])
  }

  render() {
    console.log(NavbarStyle);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>NavbarStyles</Text>
        <TouchableOpacity onPress={this.setLightbar}><Text>Set Light Navbar</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.setDarkbar}><Text>Set Dark Navbar</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.onChangeNavBarColor}><Text>Change Color</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
