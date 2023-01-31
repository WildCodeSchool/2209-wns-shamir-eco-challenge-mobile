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
import ContactForm from "./pages/Contact";
import Ionicons from "@expo/vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Accueil") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Créer un challenge") {
            iconName = focused ? "create" : "create-outline";
          }  else if (route.name === "Accueil Membre") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "Challenges") {
            iconName = focused ? "trophy" : "trophy-outline";
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Créer un challenge" component={CreateChallenge} />
      <Tab.Screen name="Challenges" component={Challenges} />
      <Tab.Screen name="Accueil Membre" component={HomeMember} />
    </Tab.Navigator>
  );
}
