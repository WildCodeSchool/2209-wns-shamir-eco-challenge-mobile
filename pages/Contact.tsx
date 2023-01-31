import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


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
    <View style={styles.container}>
      <Text style={styles.contactUs}>Contactez-nous</Text>
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
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Envoyer" onPress={handleSubmit} />
      
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor:"grey"
  },
  contactUs: {
    fontSize: 25,
  },
  label: {
    marginTop: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
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
});

export default Contact;
