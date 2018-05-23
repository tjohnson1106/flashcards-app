import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class DeckView extends Component {
  render() {
    return (
      <View>
        <Text>Deck View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DeckView;
