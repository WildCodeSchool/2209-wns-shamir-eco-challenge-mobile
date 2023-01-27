import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { RootStackParamList } from "../App";
import ChallengeProps from "../interfaces/ChallengeProps";

export default function ChallengeList({ data }: ChallengeProps) {
  const [activeId, setActiveId] = React.useState<number>(1);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPress = (id: number) => setActiveId(id);

  return (
    <View>
      {data.map((challenge) => (
        <TouchableOpacity
          key={challenge.id}
          onPress={() =>
            navigation.navigate("ChallengeDetails", {
              id: challenge.id,
            })
          }
          style={styles.challengeCard}
        >
          <ImageBackground
            source={{ uri: challenge.image }}
            imageStyle={{ borderRadius: 20 }}
            style={styles.image}
          >
            <Text>{challenge.name}</Text>
            <Text>Starting {challenge.startDate}</Text>
            <Text>Ending {challenge.endDate}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  challengeCard: {
    // backgroundColor: "green",
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 150,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    flexwrap: "wrap",
  },
});
