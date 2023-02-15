import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([
    { id: 1, title: "Finish my react native course." },
    { id: 2, title: "JS algorithms course." },
    { id: 3, title: "Finish my react native course." },
    { id: 4, title: "React testing course." },
    { id: 5, title: "Finish ZamericanEnglish courses in level 2." },
    { id: 6, title: "Finish ZamericanEnglish courses in level 3." },
    { id: 7, title: "Pass the alx programme." },
  ]);

  const deleteItem = (id) => {
    setList((prevList) => prevList.filter((x) => x.id !== id));
  };
  const addTask = (newTask) => {
    setList((prevList) => [newTask, ...prevList]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container2}>
        <Form addTask={addTask} />
        <View style={styles.container3}>
          <List list={list} setList={setList} deleteItem={deleteItem} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  container2: {
    padding: 20,
    flex: 1,
    // backgroundColor: "yellow",
  },
  container3: {
    flex: 1,
    // backgroundColor: "pink",
  },
});
