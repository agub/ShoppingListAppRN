import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import ItemList from "../components/ItemList";
import { Item } from "../types";

export default function Screen() {
	const [lists, setLists] = useState<Item[]>([
		{ id: uuidv4(), name: "卵" },
		{ id: uuidv4(), name: "海苔" },
		{ id: uuidv4(), name: "大根" },
		{ id: uuidv4(), name: "こんにゃく" },
	]);

	const putLists = (text: string) => {
		setLists((prevItem: any) => {
			return [...prevItem, { id: uuidv4, item: text }];
		});
	};
	return (
		<View style={styles.container}>
			<Header />
			<FlatList
				data={lists}
				renderItem={({ item }) => (
					<ItemList putLists={putLists} item={item} />
				)}
				keyExtractor={(item) => item.id}
			/>
			<StatusBar style='auto' />
			<InputBox />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
