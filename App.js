import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setList([...list, { key: Date.now().toString(), task }]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.task}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderColor: '#aaa', borderWidth: 1, marginBottom: 10, padding: 10 },
  item: { fontSize: 18, marginVertical: 5 },
});

export default App;
