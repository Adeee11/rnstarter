import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";
class HomeScreen extends Component {
	static navigationOptions = () => {
		return { headerTitle: "Home" };
	};

	render() {
		return (
			<View style={styles.screen}>
				<Text>This is Home Screen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: { flex: 1, backgroundColor: "#efefef" }
});


export default HomeScreen;