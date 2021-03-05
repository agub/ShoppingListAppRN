import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome5, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Item } from "../types";

export type HeaderProps = {
	deleteHandler: () => void;
	makeAllFalse: () => void;
	makeAllTrue: () => void;
};

const Header = (props: HeaderProps) => {
	const { deleteHandler, makeAllFalse, makeAllTrue } = props;
	const [edit, setEdit] = useState(true);
	const onPress = () => {
		setEdit(!edit);
		if (edit === false) {
			makeAllFalse();
		} else {
			makeAllTrue();
		}
	};
	const addDeleteHandler = () => {
		onPress();
		deleteHandler();
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.icon} onPress={onPress}>
				{edit ? (
					<MaterialIcons
						name='playlist-add-check'
						color={Colors.light.secondaryColor}
						size={30}
						// style={{ marginHorizontal: 3 }}
					/>
				) : (
					<MaterialIcons
						name='indeterminate-check-box'
						color='red'
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
		marginHorizontal: 18,
	},
});

export default Header;
