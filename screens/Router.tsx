import React from "react";
import { RootState } from "../stores";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "../components/TabNavigator";
import Contact from "./Contact";
import Friends from "./Friends";
import Guests from "./Guests";
import Login from "./auth/Login";
import Home from "./Home";
import Profile from "./Profile";
import Challenges from "./Challenges/Challenges";
import ChallengeDetails from "./Challenges/ChallengeDetails";
import CreateChallenge from "./Challenges/CreateChallenge";

export type RootStackParamList = {
    //Undefined when no params needed
    TabNavigator: undefined;
    Guests: undefined;
    Home: undefined;
    Register: undefined;
    Challenges: undefined;
    ChallengeDetails: { id: number };
    CreateChallenge: undefined;
    Profile: undefined;
    Friends: undefined;
    Contact: undefined;
  };

const Stack = createNativeStackNavigator();

const Router = () => {
  const token = useSelector((state: RootState) => state.token.jwt);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <>
          <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }} />
          <Stack.Screen name="Accueil" component={Home} />
          <Stack.Screen name="Guests" component={Guests} />
          <Stack.Screen name="HomeMember" component={Home} />
          <Stack.Screen name="Challenges" component={Challenges} />
          <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} />
          <Stack.Screen name="CreateChallenge" component={CreateChallenge} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Friends" component={Friends} />
          <Stack.Screen name="Contact" component={Contact} /></>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;