import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { NavigationActions } from "react-navigation";

import { orange, white, purple, red, green } from "../utils/colors";
import { SubmitButton } from "./buttons/SubmitButton";
import { connect } from "react-redux";
import ActionButton from "./buttons/ActionButton";
import { InfoButton } from "./buttons/InfoButton";

class Quiz extends Component {
  render() {
    const questionNumber = this.state.questionNumber;
    const decks = this.props.decks;
    const deck = this.props.navigation.state.params.entryId;
    const number = this.state.questionNumber + 1;
    return (
      <View style={styles.container}>
        <Text>{decks[deck].questions[questionNumber].question}</Text>
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

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
