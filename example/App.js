import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import NavbarStyle from 'react-native-navbar-style';


export default class App extends Component {

  setLightbar = async () => {
    await NavbarStyle.setLightNavbar(true);
  }
  setDarkbar = async () => {
    await NavbarStyle.setLightNavbar(false);
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
        <Button title="Set Light Navbar" onPress={this.setLightbar}/>
        <Button title="Set Dark Navbar" onPress={this.setDarkbar}/>
        <Button title="Change Color" onPress={this.onChangeNavBarColor}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
