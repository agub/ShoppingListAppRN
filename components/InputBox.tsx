import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";

export type InputBoxProps = {
	putList: (text: string) => void;
};
const InputBox = (props: InputBoxProps) => {
	const { putList } = props;
	const [input, setInput] = useState<string>("");

	const onPress = () => {
		if (input !== "") {
			putList(input);
			setInput("");
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<TouchableOpacity onPress={onPress}>
					<View
						style={[
							styles.buttonContainer,
							{
								backgroundColor:
									input === ""
										? "gray"
										: Colors.light.secondaryColor,
							},
						]}
					>
						<MaterialIcons name='add' size={24} color='white' />
					</View>
				</TouchableOpacity>

				<TextInput
					style={styles.TextInput}
					onChangeText={setInput}
					value={input}
					returnKeyType='next'
					placeholder={"リストを追加する!"}
					onSubmitEditing={onPress}
					blurOnSubmit={false}
					autoFocus={true}
				/>
			</View>
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
		paddingVertical: 10,
		margin: 10,
		borderRadius: 10,
		alignItems: "center",
		// marginRight: 10,
		flex: 1,
		justifyContent: "center",
		// alignItems: "flex-end",
	},
	buttonContainer: {
		backgroundColor: Colors.light.secondaryColor,
		width: 35,
		height: 35,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		// marginVertical: 10,
		marginLeft: 10,
	},
	TextInput: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
		//
	},
	icons: {
		marginHorizontal: 5,
	},
});

export default InputBox;
