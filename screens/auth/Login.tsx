import React, {useState} from "react";
import * as SecureStore from "expo-secure-store";
import { Text, View, StyleSheet, TextInput, Image, ScrollView } from "react-native"
import { Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setToken } from "../../stores/tokenReducer";
import { useNavigation } from "@react-navigation/native";
import ContactButton from "../../components/ContactButton";

export const GET_TOKEN = gql`
  mutation getToken($email: String!, $password: String!) {
    getToken(email: $email, password: $password)
  }
`;

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [loadToken] = useMutation(GET_TOKEN, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: async (data) => {
      console.log(data.getToken);
      await SecureStore.setItemAsync("token", data.getToken);
      dispatch(setToken(data.getToken));
    },
    onError(error) {
        console.log(error);
    }
  });

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>

        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />

        <Text style={styles.intro}>
          Envie de lancer un challenge à vos amis ? "Eco-Challenges" vous permet de
          créer des challenges personnalisés constitués d'éco-gestes à réaliser
          pour vous informer et vous sensibiliser sur votre impact énergétique au
          quotidien !
        </Text>

        <View style={styles.loginBox}>
          <Text style={styles.loginText}><Ionicons name={"leaf-outline"} color="#357452ff" size={20}/> Identifiant :</Text>
          <TextInput
            onChange={(e) => setEmail(e.nativeEvent.text)}
            style={styles.input}
            placeholder="ton email"
          />

          <Text style={styles.loginText}><Ionicons name={"leaf-outline"} color="#357452ff" size={20}/> Mot de passe :</Text>
          <TextInput
            secureTextEntry
            onChange={(e) => setPassword(e.nativeEvent.text)}
            style={styles.input}
            placeholder="ton mot de passe"
          />
        
          <Button
            style={styles.button}
            onPress={() => loadToken()}
          >
              <Text style={styles.buttonText}>SE CONNECTER</Text>
          </Button>
        </View>

        <View style={styles.registerBox}>
          <Text style={styles.registerText}>Nouveau challenger ?</Text>
          <Button
            style={styles.button}
            onPress={() =>
              navigation.navigate("Créer un compte", {
                screen: "Register",
              })
            }
            >
            <Text style={styles.buttonText}>CREER UN COMPTE</Text>
          </Button>
        </View>
        
        <View style={styles.contactBox}>
        <Text style={styles.contactText}>
            Vous souhaitez avoir plus d'informations sur l'application ?
            Vous rencontrez des problèmes pour vous connecter/vous enregistrer ?
            Vous voulez nous faire remonter un bug ?
            N'hésitez pas à nous contacter :
        </Text>
        <ContactButton />
        </View>

        <Image
          style={styles.ecofriend2}
          source={require('../../assets/ecofriend2.png')}
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
    paddingBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  intro: {
    fontSize: 16,
    // fontFamily: "open-sans",
    textAlign: "center",    
  },
  loginBox: {
    backgroundColor: "rgba(53, 116, 82, 0.05)",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
    // fontFamily: "open-sans",
  },
  registerBox: {
    backgroundColor: "rgba(53, 116, 82, 0.05)",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },
  registerText: {
    fontSize: 16,
    fontWeight: "bold",
    // fontFamily: "open-sans",
    marginBottom: 20,
  },
  contactBox: {
    backgroundColor: "rgba(53, 116, 82, 0.05)",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    marginBottom: 40,
  },
  contactText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
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
  ecofriend2: {
    width: 100,
    height: 100,
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
});
