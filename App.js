import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import DeckList from "./src/components/DeckList";

const App = () => (
  <View style={styles.container}>
    <DeckList />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
