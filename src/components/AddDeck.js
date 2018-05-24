import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput
} from "react-native";

import { saveDeckTitle } from "../utils/api";
import { AddDeck } from "../actions";

class AddDeck extends Component {
  state = {
    text: ""
  };

  submitName = () => {
    const { text } = this.state;

    saveDeckTitle(text);
    this.props.dispatch(AddDeck(text));
    this.props.navigation.navigate("Deckview", { entryId: text });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the deck name?</Text>
        <TextInput
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
        >
          {}
        </TextInput>
        <Button onPress={this.submitName} title="submit">
          {}
        </Button>
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

export default AddDeck;
