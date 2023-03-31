import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import ChallengeList from "../../components/ChallengeList";
import Challenge from "../../interfaces/Challenge";

export default function Challenges() {
  const [statusSelector, setStatusSelector] = useState<String>("ACTIVE");

  const GET_ALL_CHALLENGES = gql`
    query getAllChallenges {
      getAllChallenges {
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
        players {
          id
          email
          hashedPassword
          role
          name
          image
          color
        }
        startDate
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ALL_CHALLENGES);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  console.log(data.getAllChallenges);

  // TODO: Filtrer par user pour n'afficher que les challenges de l'user (Need: Auth & Data Back)

  const activeChallenge: Challenge[] = data.getAllChallenges.filter(
    (challenge: Challenge) => challenge.challengeStatus === "ACTIVE"
  );
  const upcomingChallenge: Challenge[] = data.getAllChallenges.filter(
    (challenge: Challenge) => challenge.challengeStatus === "UPCOMING"
  );
  const endedChallenge: Challenge[] = data.getAllChallenges.filter(
    (challenge: Challenge) => challenge.challengeStatus === "ENDED"
  );

  return (
    <View>
      <View style={styles.selector}>
        <TouchableOpacity
          style={
            statusSelector === "ACTIVE"
              ? styles.activeButtonSelector
              : styles.buttonSelector
          }
          onPress={() => setStatusSelector("ACTIVE")}
        >
          <Text
            style={
              statusSelector === "ACTIVE"
                ? styles.activeButtonText
                : styles.buttonText
            }
          >
            En cours ⏳
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            statusSelector === "UPCOMING"
              ? styles.activeButtonSelector
              : styles.buttonSelector
          }
          onPress={() => setStatusSelector("UPCOMING")}
        >
          <Text
            style={
              statusSelector === "UPCOMING"
                ? styles.activeButtonText
                : styles.buttonText
            }
          >
            À venir 📣
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            statusSelector === "ENDED"
              ? styles.activeButtonSelector
              : styles.buttonSelector
          }
          onPress={() => setStatusSelector("ENDED")}
        >
          <Text
            style={
              statusSelector === "ENDED"
                ? styles.activeButtonText
                : styles.buttonText
            }
          >
            Terminés 🏁
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countContainer}>
        <View>
          {statusSelector === "ACTIVE" ? (
            <Text style={styles.countText}>
              Mes challenges en cours : {`(${activeChallenge.length})`}
            </Text>
          ) : (
            ""
          )}
          {statusSelector === "UPCOMING" ? (
            <Text style={styles.countText}>
              Mes challenges à venir : {`(${upcomingChallenge.length})`}
            </Text>
          ) : (
            ""
          )}
          {statusSelector === "ENDED" ? (
            <Text style={styles.countText}>
              Mes challenges terminés : {`(${endedChallenge.length})`}
            </Text>
          ) : (
            ""
          )}
        </View>
        <ChallengeList
          data={data.getAllChallenges.filter(
            (challenge: Challenge) =>
              challenge.challengeStatus === statusSelector
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonSelector: {
    borderWidth: 1,
    borderColor: "grey",
    height: 80,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  activeButtonSelector: {
    borderWidth: 1,
    borderColor: "#00A14B",
    height: 80,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00A14B",
  },
  buttonText: {
    fontSize: 12,
  },
  activeButtonText: {
    fontSize: 20,
    color: "white",
  },
  countText: {
    fontSize: 18,
  },
  countContainer: {
    margin: 20,
    alignItems: "center",
  },
});
