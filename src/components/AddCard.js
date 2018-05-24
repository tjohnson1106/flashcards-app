import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

import { orange, white } from "../utils/colors";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions";

class AddCard extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{}</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={question =>
              this.setState({
                question
              })
            }
            value={this.state.question}
          >
            {}
          </TextInput>
          <Text style={styles.title}>{}</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={answer =>
              this.setState({
                answer
              })
            }
            value={this.state.answer}
          >
            {}
          </TextInput>
          <Text style={styles.title}>{}</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={correctAnswer =>
              this.setState({
                correctAnswer
              })
            }
            value={this.state.correctAnswer}
          >
            {}
          </TextInput>

          <TouchableOpacity>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  submitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontSize: 30,
    color: "#333"
  },
  submitButton: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
    overflow: "hidden"
  },
  inputText: {
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 20,
    borderRadius: 7
  }
});

export default AddCard;
