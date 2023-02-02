import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

let ScreenHeight = Dimensions.get("window").height;

interface Props {}

const Contact: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Ici, vous pouvez envoyer les données du formulaire à votre serveur ou à un service externe
    console.log(email, message);
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />

        <Text style={styles.contactText}> Vous souhaitez avoir plus d'informations sur l'application ?
              Vous rencontrez des problèmes pour vous connecter/vous enregistrer ?
              Vous voulez nous faire remonter un bug ?
              N'hésitez pas à nous contacter :</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
          numberOfLines={10}
        />
        <Button 
        style={styles.button}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>ENVOYER</Text>
        </Button>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    height: ScreenHeight,
  },
  logo: {
    width: 300,
    height: 300,
  },
  contactText: {
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    marginTop: 20,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: "#357452ff",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Contact;
