import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Item } from "../types";
import { Feather, AntDesign } from "@expo/vector-icons";

export type ItemListProps = {
	isEditing: boolean;
	completeHandler: (id: string) => void;
	selectedDeleteHandler: (id: string) => void;
	item: Item;
};
const ItemList = (props: ItemListProps) => {
	const { item, completeHandler, isEditing, selectedDeleteHandler } = props;

	const [showDelete, isShowDelete] = useState(false);
	const onPress = () => {
		if (isEditing) {
			console.warn("disable delete");
			isShowDelete(!showDelete);
		} else {
			console.log(item.id);
			completeHandler(item.id);
		}
	};

	const showDeleteHandler = () => {
		isShowDelete(!showDelete);
	};

	const selectedId = () => {
		selectedDeleteHandler(item.id);
	};

	return (
		<View
			style={[
				styles.main,
				{
					transform:
						showDelete && isEditing
							? [{ translateX: -70 }]
							: [{ translateX: 0 }],
				},
			]}
		>
			<View style={styles.container}>
				{isEditing && (
					<AntDesign
						name='minuscircle'
						color='red'
						size={24}
						style={{ paddingRight: 20 }}
						onPress={showDeleteHandler}
					/>
				)}
				<TouchableOpacity style={styles.midContainer} onPress={onPress}>
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
			</View>
			{showDelete && isEditing && (
				<TouchableOpacity
					style={styles.deleteButton}
					onPress={selectedId}
				>
					<Text style={styles.deleteText}>Delete</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flexDirection: "row",
	},
	container: {
		flexDirection: "row",
		// paddingVertical: 12,
		backgroundColor: "#f2f2f2",
		width: "100%",
		paddingLeft: 20,
		alignItems: "center",
		borderBottomColor: "white",
		borderBottomWidth: 2,
	},
	midContainer: {
		flexDirection: "row",
		paddingVertical: 12,
		alignItems: "center",
		// paddingHorizontal: 20,
		// flex: 1,
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
	checkIcon: {
		flexDirection: "row",
	},
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
	deleteButton: {
		backgroundColor: "red",
		flexDirection: "row",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 15,
		borderBottomColor: "white",
		borderBottomWidth: 2,
	},
	deleteText: {
		justifyContent: "flex-start",
		color: "white",
		fontWeight: "bold",
	},
});

export default ItemList;
