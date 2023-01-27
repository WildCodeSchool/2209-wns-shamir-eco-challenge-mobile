import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ChallengeList from "../../components/ChallengeList";
import { challengesData } from "../../data/dummyData";

export default function Challenges() {
  // TODO: Filtrer par user pour n'afficher que les challenges de l'user (Need: Auth & Data Back)

  // TODO: Filtrer les challenges par date et leurs appliquer un status
  type ChallengeStatus = "UPCOMING" | "STARTED" | "ENDED";

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <Text style={styles.title}>Challenges en cours 📆</Text>
      <ChallengeList data={challengesData} />
      <Text style={styles.title}>Challenges à venir 📣</Text>
      <ChallengeList data={challengesData} />
      <Text style={styles.title}>Challenges terminés 🏁</Text>
      <ChallengeList data={challengesData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 10,
    fontSize: 20,
  },
});
