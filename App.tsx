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
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Constants from "expo-constants";

const { manifest } = Constants;
const cache = new InMemoryCache();
const uri = `http://${manifest?.debuggerHost?.split(':').shift()}:5000`;


const Stack = createNativeStackNavigator<RootStackParamList>();

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

// Initialize Apollo Client
const client = new ApolloClient({
  cache,
  uri,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Visiteurs" component={Guests} />
        <Stack.Screen name="Accueil" component={Home} />
        <Stack.Screen name="Auth" component={Register} />
        <Stack.Screen name="Accueil Membre" component={HomeMember} />
        <Stack.Screen name="Challenges" component={Challenges} />
        <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} />
        <Stack.Screen name="Créer un challenge" component={CreateChallenge} />
        <Stack.Screen name="Profil" component={Profile} />
        <Stack.Screen name="Amis" component={Friends} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}
