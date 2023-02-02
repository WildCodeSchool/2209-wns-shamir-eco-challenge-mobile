import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contact from "../screens/Contact";
import Friends from "../screens/Friends";
import Guests from "../screens/Guests";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Challenges from "../screens/Challenges/Challenges";
import ChallengeDetails from "../screens/Challenges/ChallengeDetails";
import CreateChallenge from "../screens/Challenges/CreateChallenge";
import ContactForm from "../screens/Contact";
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
          } else if (route.name === "Challenges") {
            iconName = focused ? "trophy" : "trophy-outline";
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#357452ff",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Créer un challenge" component={CreateChallenge} />
      <Tab.Screen name="Challenges" component={Challenges} />
    </Tab.Navigator>
  );
}
