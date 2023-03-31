import React, { useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Button,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Form, FormItem, Modal } from "react-native-form-component";
import { gql, useQuery } from "@apollo/client";
import EcoGesture from "../../interfaces/EcoGesture";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function LoginScreen() {
  const [formStep, setFormStep] = useState(1);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const nameInput = useRef();
  const imageInput = useRef();
  const startDateInput = useRef();
  const endDateInput = useRef();
  const [selectedValue, setSelectedValue] = useState("");

  const onChangeStartDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowStartDate(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowEndDate(false);
    setEndDate(currentDate);
  };

  const showModeStartDate = (currentMode: React.SetStateAction<string>) => {
    if (Platform.OS === "ios") {
      if (showStartDate == false) {
        setShowStartDate(true);
      }
      if (showStartDate == true) {
        setShowStartDate(false);
      }
    }
    if (Platform.OS === "android") {
      setShowStartDate(true);
    }
  };
  const showModeEndDate = (currentMode: React.SetStateAction<string>) => {
    if (Platform.OS === "ios") {
      if (showEndDate == false) {
        setShowEndDate(true);
      }
      if (showEndDate == true) {
        setShowEndDate(false);
      }
    }
    if (Platform.OS === "android") {
      setShowEndDate(true);
    }
  };

  const showDatepickerStartDate = () => {
    showModeStartDate("date");
  };
  const showDatepickerEndDate = () => {
    showModeEndDate("date");
  };

  const GET_ALL_GESTURES = gql`
    query getAllGestures {
      getAllGestures {
        id
        imgUrl
        name
        text
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ALL_GESTURES);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  const gesturesList: EcoGesture[] = data.getAllGestures;
  console.log("dataGestures", data.getAllGestures);

  const imageBack = {
    uri: "https://media.istockphoto.com/id/943875208/fr/photo/globe-sur-mousse-en-for%C3%AAt-environnement-concept.jpg?s=612x612&w=0&k=20&c=yZ95LbtgTniPkVO4dYlgsHuPvjs4e9RZZNsad82DiCo=",
  };

  //TODO: Faire le formulaire en 3 étapes: 1) Name, startDate, endDate (+ gérer challengeStatus) / 2) Ajouter les écoGestes / 3) Ajouter les joueurs
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={imageBack}
        resizeMode="cover"
        style={styles.image}
      > */}
      <Text style={styles.title}>Étape {formStep}/3</Text>
      <Form
        style={styles.form}
        buttonStyle={styles.submitButton}
        buttonText={formStep == 3 ? "Confirmer" : "Suivant"}
        onButtonPress={() => setFormStep(formStep + 1)}
      >
        {formStep == 1 ? (
          <>
            <FormItem
              label="Nom du challenge :"
              isRequired
              value={name}
              onChangeText={(name) => setName(name)}
              asterik
              ref={nameInput}
            />
            <FormItem
              label="Image :"
              isRequired
              value={image}
              onChangeText={(image) => setImage(image)}
              asterik
              ref={imageInput}
            />
            <View>
              <Button onPress={showDatepickerStartDate} title="Date de début" />
              <Text>
                {`${startDate.getDate()}/${
                  startDate.getMonth() + 1
                }/${startDate.getFullYear()}`}
              </Text>
              {showStartDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={startDate}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChangeStartDate}
                />
              )}
              <Button onPress={showDatepickerEndDate} title="Date de fin" />
              <Text>
                {`${endDate.getDate()}/${
                  endDate.getMonth() + 1
                }/${endDate.getFullYear()}`}
              </Text>
              {showEndDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={endDate}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChangeEndDate}
                />
              )}
            </View>
            {startDate >= endDate ? (
              <Text>La date de fin doit être supérieur à la date de début</Text>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
        {/* <Text>Choisis des écogestes à réaliser :</Text>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        {gesturesList.map((gesture, index) => (
          <Picker.Item key={index} label={gesture.name} value={gesture.id} />
          ))}
        </Picker> */}
      </Form>
      {formStep == 1 ? (
        ""
      ) : (
        <Button
          onPress={() => setFormStep(formStep - 1)}
          title="Précédent"
          color="#841584"
          accessibilityLabel="previousButton"
        />
      )}
      {/* </ImageBackground> */}
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
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  submitButton: {
    position: "absolute",
    width: 200,
    alignSelf: "center",
    top: 480,
  },
});
