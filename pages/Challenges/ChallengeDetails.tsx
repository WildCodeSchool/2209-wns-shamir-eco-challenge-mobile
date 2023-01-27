import * as React from "react";
import { Button, Text } from "react-native";

export default function ChallengeDetails({ route, navigation }: any) {
  const { id } = route.params;

  return (
    <>
      <Text>Page Détails Challenges</Text>
      <Text>Challenge id = {id}</Text>
      <Button
        title="Retour"
        onPress={() =>
          navigation.navigate("TabNavigator", {
            screen: "ChallengeList",
          })
        }
      />
    </>
  );
}
