import * as React from "react";
import * as SecureStore from "expo-secure-store";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useDispatch } from "react-redux";
import { setToken } from "../stores/tokenReducer";

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
          <Pressable style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>SE DECONNECTER</Text>
          </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
      fontSize: 20,
  },
  ecofriend1: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
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

