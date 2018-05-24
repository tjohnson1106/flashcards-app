import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { getData } from "../utils/api";
import ActionButton from "./buttons/ActionButton";
import { purple, white, red } from "../utils/colors";

class DeckView extends Component {
  render() {
    const deck = this.props.navigation.state.params.entryId;
    const { decks } = this.props;
    console.log(deck);
    return (
      <View style={styles.container}>
        <Text>{decks[deck].title}</Text>
        <Text>{decks[deck].questions.length}</Text>

        <ActionButton
          styles={styles}
          text={"Add Card"}
          color={purple}
          onPress={() =>
            this.props.navigation.navigate("AddCard", {
              entryId: deck
            })
          }
        />
        <ActionButton
          styles={styles}
          text={"Start Quiz"}
          color={red}
          onPress={() =>
            this.props.navigation.navigate("Quiz", {
              entryId: deck
            })
          }
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
  iosButton: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 170
  },
  submitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

function mapStateToProp({ decks }) {
  return {
    decks
  };
}

export default connect(mapStateToProp)(DeckView);
