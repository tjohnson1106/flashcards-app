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
    return <View>{}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AddCard;
