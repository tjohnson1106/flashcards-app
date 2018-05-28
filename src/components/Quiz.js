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
        <View style={styles.card}>
          <Text style={styles.questions}>
            {number} / {decks[deck].question.length}
          </Text>
          <Text style={styles.mainText}>
            {decks[deck].questions[questionNumber].question}
          </Text>

          <InfoButton style={styles.answer} text={"Show Answer"}>
            {}
          </InfoButton>

          <ActionButton
            color={green}
            style={styles}
            text={"Correct"}
          />
          <ActionButton
            color={red}
            styles={styles}
            text={"incorrect"}
          />
        </View>
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
  iosButton: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 170
  },
  questions: {
    top: 0,
    alignSelf: "flex-start",
    left: 0,
    top: 0,
    color: white,
    fontSize: 20,
    margin: 5,
    position: "absolute"
  },
  answer: {
    color: white,
    fontSize: 20,
    margin: 20
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: orange,
    margin: 8,
    height: 200,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.34)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  mainText: {
    fontSize: 40,
    color: white,
    marginTop: 40,
    textAlign: "center"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
