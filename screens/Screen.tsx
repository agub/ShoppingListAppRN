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
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function Screen() {
	const [lists, setLists] = useState<Item[]>([]);
	const [isEditing, setIsEditing] = useState(false);
	// console.log(lists);

	const putLists = (text: string) => {
		setLists((prevItem: any): Item[] => {
			return [
				{ id: uuidv4(), name: text, completed: false },
				...prevItem,
			];
		});
	};

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
	const makeAllTrue = () => {
		setLists(
			lists?.map((list) => {
				if (list.completed === false) {
					return { ...list, completed: true };
				} else {
					return list;
				}
			})
		);
	};
	const makeAllFalse = () => {
		setLists(
			lists?.map((list) => {
				if (list.completed === true) {
					return { ...list, completed: false };
				} else {
					return list;
				}
			})
		);
	};
	const selectedDeleteHandler = (id: string) => {
		console.warn(id);
	};

	const editingHandler = () => {
		if (lists.length < 1) {
			alert("１つ以上のリストを追加してください");
		} else {
			setIsEditing(!isEditing);
		}
	};

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<Header
				makeAllTrue={makeAllTrue}
				makeAllFalse={makeAllFalse}
				deleteHandler={deleteHandler}
				editingHandler={editingHandler}
				isEditing={isEditing}
			/>
			<InputBox putList={putLists} />
			{/* <MaterialIcons name='add' size={24} color='black' /> */}
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
			{/* <InputBox putList={putLists} /> */}
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
