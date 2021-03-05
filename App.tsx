import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Screen from "./screens/Screen";
import { Item } from "./types";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Screen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
