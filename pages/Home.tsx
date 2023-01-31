import * as React from "react";
import {Text, View, Button, StyleSheet} from "react-native";
import ContactButton from "../components/ContactButton";

export default function Home() {
  return (
    <View style={styles.container}>

      <Text>Home Page !</Text>
      <Text>Bienvenue sur "Eco-Challenges" !</Text>
      <Text>
        Envie de lancer un challenge à vos amis ? "Nom de l'App" vous permet de
        créer des challenges personnalisés constitués d'éco-gestes à réaliser
        pour vous informer et sensibiliser sur votre impact énergétique au
        quotidien !
      </Text>
      <ContactButton />
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems:'center',
  },

});
