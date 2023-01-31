import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ContactButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate("Contact", {
          screen: "Contact",
        })
      }
    >
      <Text style={styles.buttonText}>Contact</Text>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop:25,
    backgroundColor: "#357452ff",
    padding: 10,
    borderRadius: 5,
    width:200,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ContactButton;
