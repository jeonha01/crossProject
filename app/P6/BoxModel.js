import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function BoxModel({ title, value }) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        editable={false}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%", 
    height: 120, 
    marginBottom: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    justifyContent: "space-between", 
  },
  title: {
    fontSize: 14, 
    marginBottom: 5,
    backgroundColor: "#DFF4D2",
    textAlign: "center", 
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 4,
    fontSize: 13, 
    textAlign: "left",
    flex: 1, 
  },
});