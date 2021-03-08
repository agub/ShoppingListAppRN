import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome5, AntDesign, MaterialIcons } from "@expo/vector-icons";

export type HeaderProps = {
	deleteHandler: () => void;

	editingHandler: () => void;
	isEditing: boolean;
};

const Header = (props: HeaderProps) => {
	const {
		deleteHandler,

		editingHandler,
		isEditing,
	} = props;
	const [edit, setEdit] = useState(false);
	const onPress = () => {
		// setEdit(!edit);
		editingHandler();
	};
	const addDeleteHandler = () => {
		deleteHandler();
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.icon} onPress={onPress}>
				{isEditing ? (
					<MaterialIcons
						name='playlist-add-check'
						color={Colors.light.secondaryColor}
						size={32}
					/>
				) : (
					<MaterialIcons
						name='indeterminate-check-box'
						color='white'
						size={30}
					/>
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
		marginHorizontal: 22,
	},
});

export default Header;
