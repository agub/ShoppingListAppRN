import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

const Header = () => {
	return (
		<View style={styles.container}>
			<View style={styles.icon}>
				<FontAwesome5 name='edit' color='white' size={25} />
			</View>
			<Text style={styles.text}>リスト</Text>
			<View style={styles.icon}>
				<AntDesign name='delete' color='white' size={26} />
			</View>
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
	},
	icon: {
		paddingHorizontal: 20,
	},
});

export default Header;
