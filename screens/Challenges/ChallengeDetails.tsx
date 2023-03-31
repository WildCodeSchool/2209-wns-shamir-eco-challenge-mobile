import { useQuery, gql } from "@apollo/client";
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
  ScrollView,
} from "react-native";
import Challenge from "../../interfaces/Challenge";

export default function ChallengeDetails({ route, navigation }: any) {
  const { id } = route.params;

  const GET_CHALLENGE_BY_ID = gql`
    query GetChallengeById($getChallengeById: Float!) {
      getChallengeById(id: $getChallengeById) {
        challengeStatus
        endDate
        gestures {
          id
          name
          imgUrl
          text
        }
        id
        image
        name
        startDate
        players {
          id
          email
          hashedPassword
          role
          name
          image
          color
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CHALLENGE_BY_ID, {
    variables: { getChallengeById: id },
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  console.log("databyid", data.getChallengeById);

  const detailedChallenge: Challenge = data.getChallengeById;

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
      <View style={styles.container}>
        <Image
          source={{ uri: detailedChallenge.image }}
          style={styles.imageChallenge}
        ></Image>
        <View style={styles.nameContainer}>
          <Text style={styles.challengeName}>{detailedChallenge.name}</Text>
        </View>
        {detailedChallenge.challengeStatus === "ACTIVE" ? (
          <View style={styles.activeContainer}>
            <Text style={styles.statusActive}>En cours</Text>
          </View>
        ) : (
          ""
        )}
        {detailedChallenge.challengeStatus === "UPCOMING" ? (
          <View style={styles.upcomingContainer}>
            <Text style={styles.statusUpcoming}>À venir</Text>
          </View>
        ) : (
          ""
        )}
        {detailedChallenge.challengeStatus === "ENDED" ? (
          <View style={styles.endedContainer}>
            <Text style={styles.statusEnded}>Terminé</Text>
          </View>
        ) : (
          ""
        )}
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            Du {detailedChallenge.startDate} au {detailedChallenge.endDate}
          </Text>
        </View>
        <View style={styles.ecoChallengerContainer}>
          <Text style={{ fontSize: 18 }}>ÉcoChallengers :</Text>
        </View>
        {/* <FlatList
          data={detailedChallenge.players}
          keyExtractor={(playerItem) => playerItem.id.toString()}
          listKey="playerFlatList"
          getItemLayout={(data, index) => ({
            length: 300,
            offset: 300 * index,
            index,
          })}
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
        /> */}
        <View>
          {detailedChallenge.players.map((player, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: player.color,
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
                source={{ uri: player.image }}
                style={styles.imagePlayer}
              ></Image>
              <View style={{ borderRadius: 20, backgroundColor: "white" }}>
                <Text style={styles.playerText}>{player.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.ecoGestureHeaderContainer}>
          <Text style={{ fontSize: 18, color: "black" }}>
            ÉcoGestes du challenge :
          </Text>
        </View>
        {/* <FlatList
          data={detailedChallenge.gestures}
          keyExtractor={(ecoGestureItem) => ecoGestureItem.id.toString()}
          listKey="ecoGestureFlatList"
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ImageBackground
                source={{ uri: item.imgUrl }}
                imageStyle={{ borderRadius: 20 }}
                style={styles.imageEcoGesture}
              >
                <View style={styles.ecoGestureNameContainer}>
                  <Text style={styles.ecoGestureName}>{item.name}</Text>
                </View>
                <View style={styles.ecoGestureDescContainer}>
                  <Text style={styles.ecoGestureDescText}>{item.text}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
          getItemLayout={(data, index) => ({
            length: 300,
            offset: 300 * index,
            index,
          })}
        /> */}
        <View>
          {detailedChallenge.gestures.map((gesture, index) => (
            <TouchableOpacity key={index}>
              <ImageBackground
                source={{ uri: gesture.imgUrl }}
                imageStyle={{ borderRadius: 20 }}
                style={styles.imageEcoGesture}
              >
                <View style={styles.ecoGestureNameContainer}>
                  <Text style={styles.ecoGestureName}>{gesture.name}</Text>
                </View>
                <View style={styles.ecoGestureDescContainer}>
                  <Text style={styles.ecoGestureDescText}>{gesture.text}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Button
        title="Retour"
        onPress={() =>
          navigation.navigate("TabNavigator", {
            screen: "ChallengeList",
          })
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
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
  ecoGestureNameContainer: {
    maxWidth: 280,
    alignItems: "center",
    backgroundColor: "#00A14B",
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 20,
  },
  ecoGestureName: {
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
