import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Text } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import {
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Constants } from "expo";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./src/reducers";
import { purple, white } from "./src/utils/colors";
import DeckList from "./src/components/DeckList";
import AddedDeck from "./src/components/AddedDeck";
import DeckView from "./src/components/DeckView";
import AddCard from "./src/components/AddCard";

function MainStatusBar({ backgroundColor, ...props }) {
  return (
    <View
      style={{ backgroundColor, height: Constants.statusBarHeight }}
    >
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  );
}

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="cards"
            size={30}
            color={tintColor}
          />
        )
      }
    },
    AddedDeck: {
      screen: AddedDeck,
      navigationOptions: {
        tabBarLabel: "Added Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            name="plus-square"
            size={30}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 56,
        backgroundColor: white
      }
    }
  }
);

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: "Deck Information",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add Card",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MainStatusBar
            backgroundColor={purple}
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
