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

        <View style={styles.backgroundLogin}>
          <Text style={styles.loginText}><Ionicons name={"leaf-outline"} color="#357452ff" size={20}/> Identifiant :</Text>
          <TextInput
            style={styles.input}
            placeholder="ton email"
          />

          <Text style={styles.loginText}><Ionicons name={"leaf-outline"} color="#357452ff" size={20}/> Mot de passe :</Text>
          <TextInput
            style={styles.input}
            placeholder="ton mot de passe"
          />
        
          <Button
            title="SE CONNECTER"
            color="#357452ff"
          />
        </View>

        <View style={styles.backgroundRegister}>
          <Text style={styles.registerText}>Nouveau challenger ?</Text>
        
          <Button 
            title="S'ENREGISTRER"
            color="#357452ff"
          />
        </View>
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
  },
 backgroundLogin: {
    backgroundColor: "rgba(53, 116, 82, 0.05)",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    fontFamily: "open-sans",
  },
  backgroundRegister: {
    backgroundColor: "rgba(53, 116, 82, 0.05)",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  registerText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "open-sans",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#357452ff",
    padding: 10,
    marginBottom: 20,
  },
});