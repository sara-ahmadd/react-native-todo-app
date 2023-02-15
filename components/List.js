import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "./Item";

const List = ({ list, deleteItem }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={({ item }) => {
          return <Item item={item} deleteItem={deleteItem} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flatList: {
    paddingBottom: 20,
  },
  text: {
    color: "#333",
    fontSize: 20,
    padding: 10,
  },
  icon: {
    width: 40,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 40,
    textAlign: "center",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default List;
