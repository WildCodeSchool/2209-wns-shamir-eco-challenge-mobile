import * as React from "react";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { challengesData } from "../../data/dummyData";

export default function ChallengeDetails({ route, navigation }: any) {
  const { id } = route.params;
  const detailedChallenge = challengesData.filter(
    (challenge) => challenge.id === id
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={detailedChallenge}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              source={{ uri: item.image }}
              style={styles.imageChallenge}
            ></Image>
            <View style={styles.nameContainer}>
              <Text style={styles.challengeName}>{item.name}</Text>
            </View>
            {item.status === "ACTIVE" ? (
              <View style={styles.activeContainer}>
                <Text style={styles.statusActive}>En cours</Text>
              </View>
            ) : (
              ""
            )}
            {item.status === "UPCOMING" ? (
              <View style={styles.upcomingContainer}>
                <Text style={styles.statusUpcoming}>À venir</Text>
              </View>
            ) : (
              ""
            )}
            {item.status === "ENDED" ? (
              <View style={styles.endedContainer}>
                <Text style={styles.statusEnded}>Terminé</Text>
              </View>
            ) : (
              ""
            )}
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>
                Du {item.startDate} au {item.endDate}
              </Text>
            </View>
            <View style={styles.ecoChallengerContainer}>
              <Text style={{ fontSize: 18 }}>ÉcoChallengers :</Text>
            </View>
            <FlatList
              data={item.playersList}
              keyExtractor={(playerItem) => playerItem.id.toString()}
              listKey="playerFlatList"
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: item.color,
                    width: 275,
                    borderColor: "black",
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 50,
                    margin: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.imagePlayer}
                  ></Image>
                  <View style={{ borderRadius: 20, backgroundColor: "white" }}>
                    <Text style={styles.playerText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={styles.ecoGestureHeaderContainer}>
              <Text style={{ fontSize: 18, color: "black" }}>
                ÉcoGestes du challenge :
              </Text>
            </View>
            <FlatList
              data={item.ecoGesturesList}
              keyExtractor={(ecoGestureItem) => ecoGestureItem.id.toString()}
              listKey="ecoGestureFlatList"
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <ImageBackground
                    source={{ uri: item.imgUrl }}
                    imageStyle={{ borderRadius: 20 }}
                    style={styles.imageEcoGesture}
                  >
                    <View style={styles.ecoGestureTitleContainer}>
                      <Text style={styles.ecoGestureTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.ecoGestureDescContainer}>
                      <Text style={styles.ecoGestureDescText}>{item.text}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      />
      <Button
        title="Retour"
        onPress={() =>
          navigation.navigate("TabNavigator", {
            screen: "ChallengeList",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imageChallenge: {
    margin: 20,
    height: 150,
    width: 300,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexwrap: "wrap",
  },
  nameContainer: {
    backgroundColor: "#357452",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
  challengeName: {
    fontSize: 22,
    padding: 10,
    color: "white",
  },
  activeContainer: {
    backgroundColor: "green",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    position: "absolute",
    top: 30,
    right: 30,
    width: 100,
    height: 25,
  },
  statusActive: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  upcomingContainer: {
    backgroundColor: "orange",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    position: "absolute",
    top: 30,
    right: 30,
    width: 100,
    height: 25,
  },
  statusUpcoming: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  endedContainer: {
    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    position: "absolute",
    top: 30,
    right: 30,
    width: 100,
    height: 25,
  },
  statusEnded: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    alignItems: "center",
  },
  dateContainer: {
    backgroundColor: "#00A14B",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 5,
  },
  dateText: {
    color: "white",
    fontSize: 16,
  },

  imagePlayer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  playerText: {
    color: "black",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  ecoChallengerContainer: {
    margin: 20,
    padding: 10,
    backgroundColor: "#A7DEC1",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
  },
  ecoGestureHeaderContainer: {
    backgroundColor: "#8BC53F",
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 20,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  imageEcoGesture: {
    height: 200,
    width: 300,
    padding: 10,
    margin: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  ecoGestureTitleContainer: {
    maxWidth: 280,
    alignItems: "center",
    backgroundColor: "#00A14B",
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 20,
  },
  ecoGestureTitle: {
    justifyContent: "center",
    padding: 5,
    color: "white",
  },
  ecoGestureDescContainer: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    borderWidth: 2,
  },
  ecoGestureDescText: { color: "black" },
});
