import React from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  StackNavigator
} from "react-navigation";
import {
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";

import AddDeck from "./src/components/AddDeck";
import { purple, white } from "./src/utils/colors";
import DeckList from "./src/components/DeckList";

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
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
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

const MainNavigator = StackNavigator({
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
  }
});

const App = () => (
  <View style={{ flex: 1 }}>
    <Tabs />
  </View>
);

export default App;
