import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const FlatListComp = () => {
  const [people, setPeople] = useState([
    {
      name: "Person1",
      id: 1,
    },
    {
      name: "Person2",
      id: 2,
    },
    {
      name: "Person3",
      id: 3,
    },
    {
      name: "Person4",
      id: 4,
    },
    {
      name: "Person5",
      id: 5,
    },
    {
      name: "Person6",
      id: 6,
    },
    {
      name: "Person7",
      id: 7,
    },
    {
      name: "Person8",
      id: 8,
    },
    {
      name: "Person9",
      id: 9,
    },
    {
      name: "Person10",
      id: 10,
    },
    {
      name: "Person11",
      id: 11,
    },
  ]);
  /**
   * @param {number} id The id of the item to be removed from the people state.
   * @returns {array} Array containing the rest items in the input array.
   */
  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((item) => item.id !== id);
    });
  };
  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.pinkText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  pinkText: {
    color: "#000",
    fontSize: 25,
    paddingHorizontal: 20,
    paddingTop: 10,
    textAlign: "center",
    backgroundColor: "pink",
    fontWeight: "bold",
    padding: 20,
    width: 150,
    marginTop: 30,
    marginHorizontal: 10,
    height: 100,
  },
});

export default FlatListComp;
