import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Image, ScrollView, Dimensions } from "react-native"
import { Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { gql, useMutation } from "@apollo/client";

let ScreenHeight = Dimensions.get("window").height;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password)
  }
`;

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const [newUser] = useMutation(CREATE_USER, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: (data) => {
      console.log(data.createUser);
    },
    onError(error) {
        console.log(error);
    }
  });

  return (
    <ScrollView>
      <View style={styles.container}>

        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />

        <Text style={styles.intro}>
          Envie de relever le défi ?
        </Text>

        <View style={styles.registerBox}>
            <Text style={styles.registerText}><Ionicons name={"leaf-outline"} color="#357452ff" size={20}/> Identifiant :</Text>
                <TextInput
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                    style={styles.input}
                    placeholder="ton email"
                />


                <Text style={styles.registerText}><Ionicons name={"leaf-outline"} color="#357452ff" size={20}/> Mot de passe :</Text>
                <TextInput
                    secureTextEntry
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                    style={styles.input}
                    placeholder="ton mot de passe"
                    />
                <Button
                  style={styles.button}
                  onPress={() => {newUser()}}
                >
                <Text style={styles.buttonText}>S'ENREGISTRER</Text>
                </Button>
        </View>

        <Image
          style={styles.ecofriend4}
          source={require('../../assets/ecofriend4.png')}
        />

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
  intro: {
    fontSize: 20,
    // fontFamily: "open-sans",
    textAlign: "center",    
  },
  registerBox: {
    backgroundColor: "rgba(53, 116, 82, 0.05)",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    marginBottom: 40,
  },
  registerText: {
    fontSize: 16,
    fontWeight: "bold",
    // fontFamily: "open-sans",
  },
  input: {
    height: 40,
    width: 250,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#357452ff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#357452ff",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ecofriend4: {
    width: 100,
    height: 100,
  },
});
