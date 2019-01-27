import React, { Component } from "react";

import { View, Text, StyleSheet, Button } from "react-native";
class LoginScreen extends Component {
  static navigationOptions = () => {
    return { headerTitle: "Login" };
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text>This is Login Screen</Text>
				<Button title="Go to Home" onPress={() =>{this.props.navigation.navigate('Home')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#efefef", paddingTop: 50 }
});


export default LoginScreen;