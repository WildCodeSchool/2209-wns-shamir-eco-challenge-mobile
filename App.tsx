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
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  //Undefined when no params needed
  TabNavigator: undefined;
  Guests: undefined;
  Home: undefined;
  Register: undefined;
  HomeMember: undefined;
  Challenges: undefined;
  ChallengeDetails: { id: number };
  CreateChallenge: undefined;
  Profile: undefined;
  Friends: undefined;
  Contact: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Guests" component={Guests} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeMember" component={HomeMember} />
        <Stack.Screen name="Challenges" component={Challenges} />
        <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} />
        <Stack.Screen name="CreateChallenge" component={CreateChallenge} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
