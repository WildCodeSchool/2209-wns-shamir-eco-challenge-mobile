import React, { useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Form, FormItem, Modal } from "react-native-form-component";

export default function LoginScreen() {
  const [currency, setCurrency] = useState("US Dollar");
  function handleSubmitForm() {}
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const emailInput = useRef();
  const nameInput = useRef();
  const [selectedValue, setSelectedValue] = useState("");

  const image = {
    uri: "https://media.istockphoto.com/id/943875208/fr/photo/globe-sur-mousse-en-for%C3%AAt-environnement-concept.jpg?s=612x612&w=0&k=20&c=yZ95LbtgTniPkVO4dYlgsHuPvjs4e9RZZNsad82DiCo=",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TextInput style={styles.title}>Créer un challenge</TextInput>
        <Form
          style={styles.form}
          onButtonPress={() => console.warn("do something")}
        >
          <FormItem
            label="Name"
            isRequired
            value={name}
            onChangeText={(name) => setName(name)}
            asterik
            ref={nameInput}
          />
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Écogeste n°1" value="gesture_1" />
            <Picker.Item label="Écogeste n°2" value="gesture_2" />
            <Picker.Item label="Écogeste n°3" value="gesture_3" />
            <Picker.Item label="Écogeste n°4" value="gesture_4" />
            <Picker.Item label="Écogeste n°5" value="gesture_5" />
            <Picker.Item label="Écogeste n°6" value="gesture_6" />
            <Picker.Item label="Écogeste n°7" value="gesture_7" />
            <Picker.Item label="Écogeste n°8" value="gesture_8" />
          </Picker>
        </Form>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
    margin: 50,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
});
