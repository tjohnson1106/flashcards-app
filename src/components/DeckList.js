import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

import { deck } from "../components/DeckView";
import { getData, getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { orange, white } from "../utils/colors";

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
            <View key={deck} style={styles.card}>
              <Text style={styles.cardText}>{title}</Text>
              <Text style={styles.cardText}>{questions.length}</Text>

              <Button
                style={styles.cardButton}
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
    alignSelf: "stretch",
    padding: 5
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
  cardText: {
    fontSize: 30,
    color: white
  },
  cardButton: {
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
