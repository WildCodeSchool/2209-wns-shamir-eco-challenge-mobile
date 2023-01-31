import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Image, ScrollView, Alert, Modal, Pressable } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";


export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
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

        <View style={styles.loginBox}>
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
        
        <Pressable style={[styles.button, styles.buttonClose]}>
            <Text style={styles.textStyle}>SE CONNECTER</Text>
          </Pressable>
        </View>

        <View style={styles.registerBox}>
          <Text style={styles.registerText}>Nouveau challenger ?</Text>
        
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
              <View style={styles.modalView}>
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
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>S'ENREGISTRER</Text>
                </Pressable>
              </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>CREER UN COMPTE</Text>
          </Pressable>
        </View>

        <Image
          style={styles.ecofriend1}
          source={require('../assets/ecofriend2.png')}
        />
      </View>
    </ScrollView>

      );
}

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
    fontFamily: "open-sans",
    textAlign: "center",    
  },
  loginBox: {
    backgroundColor: "rgba(53, 116, 82, 0.05)",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    fontFamily: "open-sans",
  },
  registerBox: {
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
    marginBottom: 20,
  },
  ecofriend1: {
    width: 100,
    height: 100,
  },
  modalView: {
    height: 500,
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#357452ff',
  },
  buttonClose: {
    backgroundColor: '#357452ff',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
});
