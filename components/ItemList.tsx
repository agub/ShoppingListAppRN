import React, { FC, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Animated,
	Easing,
} from "react-native";
import Colors from "../constants/Colors";
import { Item } from "../types";
import { Feather, AntDesign } from "@expo/vector-icons";

export type ItemListProps = {
	item: Item;
	isEditing: boolean;
	completeHandler: (id: string) => void;
	selectedDeleteHandler: (id: string) => void;
};
const ItemList = (props: ItemListProps) => {
	const { item, completeHandler, isEditing, selectedDeleteHandler } = props;

	const [showDelete, setShowDelete] = useState(false);

	//------functions----------
	const onPress = () => {
		if (isEditing && showDelete) {
			setShowDelete(!showDelete);
		} else {
			completeHandler(item.id);
		}
	};

	const showDeleteHandler = () => {
		setShowDelete(!showDelete);
	};

	const selectedId = () => {
		selectedDeleteHandler(item.id);
	};

	// const onUpwards = () => {
	// 	upwardsHandler(item.index);
	// 	console.log(item.index);
	// };

	// const SortsComponent: FC = (): JSX.Element => {
	// 	return (
	// 		<>
	// 			{/* {isEditing && !showDelete && ( */}
	// 			<View
	// 				style={{
	// 					flexDirection: "row",
	// 					// marginLeft: "auto",
	// 					justifyContent: "flex-end",
	// 					// width: "100%",
	// 					// flex: 1,
	// 				}}
	// 			>
	// 				<TouchableOpacity onPress={onUpwards}>
	// 					<AntDesign
	// 						name='up'
	// 						color={Colors.light.primaryColor}
	// 						size={23}
	// 					/>
	// 				</TouchableOpacity>
	// 				<TouchableOpacity>
	// 					<AntDesign
	// 						name='down'
	// 						color={Colors.light.primaryColor}
	// 						size={23}
	// 					/>
	// 				</TouchableOpacity>
	// 			</View>
	// 			{/* )} */}
	// 		</>
	// 	);
	// };

	//---------Animation-------
	const spinValue = new Animated.Value(0);

	Animated.timing(spinValue, {
		toValue: 1,
		duration: 200,
		easing: Easing.linear,
		useNativeDriver: true,
	}).start();

	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, -70],
	});

	//----------------

	return (
		<Animated.View
			style={[
				styles.main,
				{
					transform:
						showDelete && isEditing
							? [{ translateX: spin }]
							: [{ translateX: 0 }],
				},
			]}
		>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				{isEditing && (
					<View style={{ flexDirection: "row" }}>
						<AntDesign
							name='minuscircle'
							color='red'
							size={24}
							style={{ paddingRight: 20 }}
							onPress={showDeleteHandler}
						/>
					</View>
				)}
				{/* {!isEditing && ( */}
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
				{/* )} */}
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
			{showDelete && isEditing && (
				<TouchableOpacity
					style={styles.deleteButton}
					onPress={selectedId}
				>
					<Text style={styles.deleteText}>Delete</Text>
				</TouchableOpacity>
			)}
		</Animated.View>
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
		paddingLeft: 25,
		alignItems: "center",
		borderBottomColor: "white",
		borderBottomWidth: 2,
		paddingVertical: 12,
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
		// width: "asu",
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
