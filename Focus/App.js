
import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("null")
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where I'm going to build a Timer</Text>
      ) : (
        <Text>Here i want to build input for a subject</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
