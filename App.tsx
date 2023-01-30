import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contact from "./pages/Contact";
import Friends from "./pages/Friends";
import Guests from "./pages/Guests";
import Home from "./pages/Home";
import HomeMember from "./pages/HomeMember";
import Profile from "./pages/Profile";
import Register from "./components/Register";
import Challenges from "./pages/Challenges/Challenges";
import ChallengeDetails from "./pages/Challenges/ChallengeDetails";
import CreateChallenge from "./pages/Challenges/CreateChallenge";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";
import TabNavigator from "./TabNavigator";
import {Ionicons} from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./pages/HomeScreen";
import SettingScreen from "./pages/SettingScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Setting: SettingScreen,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#357453",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#FFF",
        },
        headerTintColor: "#FFF",
      },
    }/*,
    {
      initialRouteName: "Home",
    }*/
);

const Navigator = createAppContainer(AppNavigator);

export type RootStackParamList = {
  //Undefined when no params needed
  TabNavigator: undefined;
  Guests: undefined;
  Accueil: undefined;
  Register: undefined;
  HomeMember: undefined;
  Challenges: undefined;
  ChallengeDetails: { id: number };
  CreateChallenge: undefined;
  Profile: undefined;
  Friends: undefined;
  Contact: undefined;
};
const HeaderButtonComponent = (props: any) => (
    <HeaderButton
        IconComponent={Ionicons}
        iconSize={23}
        color="#FFF"
        {...props}
    />
);

export default function App() {
  return (
      <>
        <Navigator>

        </Navigator>
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Visiteurs" component={Guests} />
        <Stack.Screen name="Auth" component={Register} />
        <Stack.Screen name="Accueil Membre" component={HomeMember} />
        <Stack.Screen name="Challenges" component={Challenges} />
        <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} />
        <Stack.Screen name="Créer un challenge" component={CreateChallenge} />
        <Stack.Screen name="Profil" component={Profile} />
        <Stack.Screen name="Amis" component={Friends} />
        <Stack.Screen name="contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>

      </>
  );
}

