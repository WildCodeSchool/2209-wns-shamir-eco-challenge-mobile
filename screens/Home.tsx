import * as React from "react";
import * as SecureStore from "expo-secure-store";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setToken } from "../stores/tokenReducer";
import ContactButton from "../components/ContactButton";

export default function Home() {
  const dispatch = useDispatch();
  const logout = () => {
    SecureStore.deleteItemAsync("token");
    dispatch(setToken(""));
  };
  
  return (
       <View style={styles.container}>
          <Text style={styles.title}>
            Bienvenue sur ta page d'accueil !
          </Text>
          <Image
          style={styles.ecofriend1}
          source={require('../assets/ecofriend1.png')}
          />
          <Button style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>SE DECONNECTER</Text>
          </Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
      fontSize: 20,
  },
  ecofriend1: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#357452ff',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

