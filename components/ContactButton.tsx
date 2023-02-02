import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ContactButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      style={styles.button}
      onPress={() =>
        navigation.navigate("Contact", {
          screen: "Contact",
        })
      }
    >
      <Text style={styles.buttonText}>CONTACT</Text>
    </Button>
    
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#357452ff",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ContactButton;
