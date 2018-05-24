import React from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import {
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";

import { purple, white } from "./src/utils/colors";
import DeckList from "./src/components/DeckList";
import AddDeck from "./src/components/AddDeck";
import DeckView from "./src/components/DeckView";

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
  }
});

const App = () => (
  <View style={{ flex: 1 }}>
    <MainNavigator />
  </View>
);

export default App;
