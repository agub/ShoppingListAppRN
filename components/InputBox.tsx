import {
	FontAwesome5,
	MaterialCommunityIcons,
	Entypo,
	Fontisto,
	MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";

import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";
import { Item } from "../types";

// export type InputBoxProps = {
// 	// setLists(): (text: string) => void;
// 	setLists(text: string): { id: string; name: string };
// };
export type InputBoxProps = {
	// setLists(): (text: string) => void;
	putList: (text: string) => void;
};
const InputBox = (props: InputBoxProps) => {
	const [input, setInput] = useState<string | undefined>("");

	const onPress = () => {
		props.putList("asfa");
		// setInput("");
	};
	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<TextInput
					style={styles.TextInput}
					multiline
					onChangeText={setInput}
					value={input}
					returnKeyType='next'
					placeholder={"Type something!"}

					// numberOfLines={2}
				/>
			</View>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.buttonContainer}>
					<MaterialIcons name='send' size={24} color='white' />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		backgroundColor: "gray",
	},
	mainContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 10,
		margin: 10,
		borderRadius: 10,
		// marginRight: 10,
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	buttonContainer: {
		backgroundColor: Colors.light.secondaryColor,
		width: 45,
		height: 45,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
		marginRight: 10,
	},
	TextInput: {
		flex: 1,
		marginHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
		//
	},
	icons: {
		marginHorizontal: 5,
	},
});

export default InputBox;
