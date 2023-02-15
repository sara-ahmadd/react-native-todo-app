import React, { useState } from "react";

import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const MainComponent = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={styles.pinkText}>Hello! World.It's {name || "Guest"}</Text>
      <Text style={styles.pinkTextII}>Enter Your Name</Text>
      <TextInput
        style={styles.inputField}
        multiline
        placeholder="name"
        value={input}
        keyboardType="email-adress"
        type="text"
        onChangeText={(value) => setInput(value)}
      />
      {/*<input style={styles.btn} type="submit" value="My Name" />*/}
      <Button
        title="Update Name"
        onPress={() => {
          setName(input);
          setInput("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pinkText: {
    color: "#000",
    textAlign: "center",
    backgroundColor: "pink",
    fontWeight: "bold",
    padding: 20,
    width: 200,
  },
  formStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  inputField: {
    height: 70,
    width: 100,
    padding: 10,
    fontSize: 25,
    border: "1px solid #000",
  },
  pinkTextII: {
    backgroundColor: "yellow",
    textAlign: "center",
    padding: 10,
    cursor: "pointer",
  },
});
export default MainComponent;
