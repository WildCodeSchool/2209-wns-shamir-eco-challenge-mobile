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
import ChallengesDetails from "./pages/Challenges/ChallengesDetails";
import CreateChallenge from "./pages/Challenges/CreateChallenge";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Visiteurs" component={Guests}
          />
          <Tab.Screen name="Accueil" component={Home} />
         {/* <Tab.Screen name="Auth" component={Register} />*/}
          <Tab.Screen name="Accueil Membre" component={HomeMember} />
          {/*<Tab.Screen name="Challenges" component={Challenges} />*/}
          <Tab.Screen name="Détails challenges" component={ChallengesDetails} />
          <Tab.Screen name="Créer un challenge" component={CreateChallenge} />
          <Tab.Screen name="Profil" component={Profile} />
          <Tab.Screen name="Amis" component={Friends} />
          <Tab.Screen name="contact" component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
