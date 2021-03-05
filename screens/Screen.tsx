import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import ItemList from "../components/ItemList";
import { Item } from "../types";

export default function Screen() {
	const [lists, setLists] = useState<Item[] | undefined>([
		{ id: uuidv4(), name: "fasdfadsf" },
		{ id: uuidv4(), name: "fasdfa" },
		{ id: uuidv4(), name: "fadsfa" },
		{ id: uuidv4(), name: "fadsfa" },
		{ id: uuidv4(), name: "fadsfa" },
		{ id: uuidv4(), name: "fadsfa" },
		{ id: uuidv4(), name: "fadsfa" },
	]);

	const putLists = (text: string) => {
		setLists((prevItem: any) => {
			return [{ id: uuidv4(), name: text }, ...prevItem];
		});
	};
	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<Header />
			<FlatList
				data={lists}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ItemList item={item} />}
			/>
			<InputBox putList={putLists} />
			<StatusBar style='auto' />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		width: "100%",
		backgroundColor: "#fff",
	},
});
