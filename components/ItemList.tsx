import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Item } from "../types";
import { Feather } from "@expo/vector-icons";

export type ItemListProps = {
	item: Item;
	completeHandler: (id: string) => void;
};
const ItemList = (props: ItemListProps) => {
	const { item, completeHandler } = props;
	const onPress = () => {
		console.log(item.id);
		completeHandler(item.id);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={styles.checkIcon}>
				{item.completed ? (
					<Feather
						name='check-square'
						color={Colors.light.secondaryColor}
						size={24}
					/>
				) : (
					<Feather name='square' color='red' size={24} />
				)}
			</View>
			<Text
				style={[
					styles.itemList,
					{
						textDecorationLine: item.completed
							? "line-through"
							: "none",
						fontWeight: item.completed ? "normal" : "bold",
					},
				]}
			>
				{item.name}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingVertical: 12,
		paddingHorizontal: 20,
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
		fontWeight: "bold",
		textDecorationStyle: "double",
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
