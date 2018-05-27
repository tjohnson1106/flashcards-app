import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput
} from "react-native";
import { connect } from "react-redux";

import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import SubmitButton from "./buttons/SubmitButton";
import { orange } from "../utils/colors";
class AddedDeck extends Component {
  state = {
    text: ""
  };

  submitName = () => {
    const { text } = this.state;

    saveDeckTitle(text);
    this.props.dispatch(addDeck(text));
    this.props.navigation.navigate("Deckview", { entryId: text });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the deck name?</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
        >
          {}
        </TextInput>
        <SubmitButton
          style={styles.submitButton}
          onPress={this.submitName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 50,
    borderRadius: 8
  },
  title: {
    fontSize: 30,
    color: "#333"
  },
  submitButton: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    borderRadius: 7,
    overflow: "hidden"
  }
});

export default connect()(AddedDeck);
