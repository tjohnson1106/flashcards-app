import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

import { deck } from "../components/DeckView";
import { getData, getDecks } from "../utils/api";
import { receiveDecks } from "../actions";

class DeckList extends Component {
  componentDidMount() {
    getDecks().then(decks => this.props.receiveAllDecks(decks));
  }

  render() {
    //map state
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deck => {
          const { title, questions } = decks[deck];
          return (
            <View key={deck}>
              <Text>{title}</Text>
              <Text>{questions.length}</Text>

              <Button
                onPress={() =>
                  this.props.navigation.navigate("DeckView", {
                    entryId: deck
                  })
                }
                title="View Deck"
              />
            </View>
          );
        })}
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

function mapDispatchToProps(dispatch) {
  return {
    receiveAllDecks: decks => dispatch(receiveDecks(decks))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
