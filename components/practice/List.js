import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const List = () => {
  const [list, setList] = useState([
    { name: "test1", key: "1" },
    { name: "test2", key: "2" },
    { name: "test3", key: "3" },
    { name: "test4", key: "4" },
    { name: "test5", key: "5" },
    { name: "test6", key: "6" },
    { name: "test7", key: "7" },
    { name: "test8", key: "8" },
    { name: "test9", key: "9" },
  ]);
  return (
    <View>
      <ScrollView>
        {list.map((x) => {
          return (
            <View key={x.key}>
              <Text style={styles.pinkText}>
                {x.key}/{x.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
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
    paddingVertical: 20,
    width: 300,
    marginTop: 30,
    marginHorizontal: 10,
    height: 100,
  },
});

export default List;
