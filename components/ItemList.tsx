import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Item } from "../types";

export type ItemList = {
	item: Item;
	putLists: (text: string) => void;
};
const MainScreen = (props: ItemList) => {
	const { item } = props;
	return (
		<View style={styles.container}>
			<Text>{item.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default MainScreen;
