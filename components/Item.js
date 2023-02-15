import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Item = ({ item, deleteItem }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
      <Text style={styles.text}> {item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderColor: "#000",
    borderRadius: 10,
    borderStyle: "dashed",
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#333",
    fontSize: 20,
    padding: 10,
  },
  icon: {
    width: 100,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "grey",
    color: "#fff",
    fontSize: 20,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Item;
