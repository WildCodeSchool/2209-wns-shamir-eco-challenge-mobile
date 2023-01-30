import * as React from "react";
import {Button, Text, View, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />

      <Text style={styles.intro}>
        Envie de lancer un challenge à vos amis ? "Eco-Challenges" vous permet de
        créer des challenges personnalisés constitués d'éco-gestes à réaliser
        pour vous informer et vous sensibiliser sur votre impact énergétique au
        quotidien !
      </Text>

      <Text style={styles.login}><Ionicons name={"leaf-outline"} color="#357452ff"/> Identifiant :</Text>
      <TextInput
        style={styles.input}
        placeholder="ton email"
      />
      
      <Text style={styles.login}><Ionicons name={"leaf-outline"} color="#357452ff"/> Mot de passe :</Text>
      <TextInput
        style={styles.input}
        placeholder="ton mot de passe"
      />

      <Button
        title="SE CONNECTER"
        color="#357452ff"
      />

      <Text style={styles.register}>Nouveau challenger ?</Text>

      <Button 
        title="S'ENREGISTRER"
        color="#357452ff"
      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    paddingBottom: 50,
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "montserrat",
    marginBottom: 5,
  },
  intro: {
    fontSize: 16,
    fontFamily: "open-sans",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    
  },
  login: {
    fontSize: 16,
    fontFamily: "open-sans",
  },
  register: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "open-sans",
    marginTop: 50,
    marginBottom: 30,
  },
  input: {
    height: 40,
    marginBottom: 30,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#357452ff",
    padding: 10,
  },
});