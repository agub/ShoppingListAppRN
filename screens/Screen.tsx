import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import ItemList from "../components/ItemList";
import { Item } from "../types";

export default function Screen() {
	const [lists, setLists] = useState<Item[]>([]);
	const [isEditing, setIsEditing] = useState(false);
	const [index, setIndex] = useState(0);

	const putLists = (text: string) => {
		setLists((prevItem: any): Item[] => {
			return [
				{
					id: uuidv4(),
					name: text,
					completed: false,
					index: lists.length,
				},
				...prevItem,
			];
		});
		// setIndex((index) => index + 1);
	};
	// console.log(lists);

	const completeHandler = (id: string) => {
		setLists(
			lists?.map((list) => {
				if (list.id === id) {
					return { ...list, completed: !list.completed };
				}
				return list;
			})
		);
	};

	const deleteHandler = () => {
		setLists(
			lists?.filter((list) => {
				if (list.completed === true) {
					return;
				} else {
					return list;
				}
			})
		);
	};

	const selectedDeleteHandler = (id: string) => {
		setLists(
			lists?.filter((list) => {
				if (list.id === id) {
					return;
				} else {
					return list;
				}
			})
		);
	};

	const editingHandler = () => {
		if (lists.length < 1) {
			alert("１つ以上のリストを追加してください");
		} else {
			setIsEditing(!isEditing);
		}
	};

	useEffect(() => {
		if (lists.length < 1) {
			setIsEditing(false);
		}
	}, [lists]);

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<Header
				deleteHandler={deleteHandler}
				editingHandler={editingHandler}
				isEditing={isEditing}
			/>
			<InputBox putList={putLists} />
			<FlatList
				data={lists}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ItemList
						completeHandler={completeHandler}
						selectedDeleteHandler={selectedDeleteHandler}
						isEditing={isEditing}
						item={item}
					/>
				)}
			/>

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
