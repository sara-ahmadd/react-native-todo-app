import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    height: 70,
  },
  header: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
});
export default Header;
