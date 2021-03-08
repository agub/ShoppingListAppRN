import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome5, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Item } from "../types";

export type HeaderProps = {
	deleteHandler: () => void;
	makeAllFalse: () => void;
	makeAllTrue: () => void;
	editingHandler: () => void;
	isEditing: boolean;
};

const Header = (props: HeaderProps) => {
	const {
		deleteHandler,
		makeAllFalse,
		makeAllTrue,
		editingHandler,
		isEditing,
	} = props;
	const [edit, setEdit] = useState(false);
	const onPress = () => {
		// setEdit(!edit);
		editingHandler();
	};
	const addDeleteHandler = () => {
		// onPress();
		deleteHandler();
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.icon} onPress={onPress}>
				{isEditing ? (
					// <MaterialIcons
					// 	name='playlist-add-check'
					// 	color={Colors.light.secondaryColor}
					// 	size={30}
					<Text style={styles.text}>Done</Text>
				) : (
					// />

					<Text style={styles.text}>Edit</Text>
					// <MaterialIcons
					// 	name='indeterminate-check-box'
					// 	color='red'
					// 	size={30}
					// />
					// <Text style={styles.text}>選択解除</Text>
				)}
			</TouchableOpacity>
			<Text style={styles.text}>リスト</Text>
			<TouchableOpacity style={styles.icon} onPress={addDeleteHandler}>
				<AntDesign name='delete' color='white' size={26} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		alignItems: "center",
		backgroundColor: Colors.light.primaryColor,
		paddingVertical: 10,
	},
	text: {
		color: "white",
		fontSize: 20,
		paddingVertical: 11,
	},
	icon: {
		marginHorizontal: 18,
	},
});

export default Header;
