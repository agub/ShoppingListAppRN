import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { Item } from "../types";
import { Feather } from "@expo/vector-icons";

export type ItemListProps = {
	item: Item;
};
const ItemList = (props: ItemListProps) => {
	const { item } = props;
	return (
		<View style={styles.container}>
			<View style={styles.checkIcon}>
				<Feather name='square' color='red' size={24} />
			</View>
			<Text style={styles.itemList}>{item.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
		alignItems: "center",
		flex: 1,
	},
	addsContainer: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	itemList: {
		paddingHorizontal: 20,
		fontSize: 20,
	},
	checkIcon: {},
	addIcon: {
		width: 20,
		height: 20,
		backgroundColor: Colors.light.secondaryColor,
	},
	text: {
		fontSize: 20,
		flex: 1,
		paddingLeft: 10,
	},
});

export default ItemList;
