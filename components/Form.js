import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";

const Form = ({ addTask }) => {
  const [value, setValue] = useState("");
  //creating new id for each new task
  const newId = Math.floor(Math.random() * 1234) + 1;

  const addingVewTask = () => {
    if (value.length > 4) {
      addTask({ id: newId, title: value });
      setValue("");
    } else {
      Alert.alert("Warning", "The task title must be at least 5 chars.", [
        {
          text: "Ok",
          onPress: () => console.log("The alert is displayed successfully."),
        },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Task"
        style={styles.input}
        value={value}
        onChangeText={(value) => setValue(value)}
      />
      <View style={styles.btnContainer}>
        <Button
          onPress={() => {
            addingVewTask();
          }}
          title="Add Task"
          color={"grey"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3e3e",
    padding: 10,
  },
  input: {
    color: "#000",
    borderColor: "grey",
    borderWidth: 2,
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
    borderRadius: 10,
  },
  btnContainer: {
    padding: 10,
  },
});

export default Form;
