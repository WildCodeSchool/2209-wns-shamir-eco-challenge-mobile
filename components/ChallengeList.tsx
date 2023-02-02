import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { visitWithTypeInfo } from "graphql";
import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { RootStackParamList } from "../screens/Router";
import ChallengeProps from "../interfaces/ChallengeProps";

export default function ChallengeList({ data }: ChallengeProps) {
  const [activeId, setActiveId] = React.useState<number>(1);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const todayDate = new Date().toLocaleDateString();

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate("ChallengeDetails", {
                id: item.id,
              })
            }
            style={styles.challengeCard}
          >
            <ImageBackground
              source={{ uri: item.image }}
              imageStyle={{ borderRadius: 20 }}
              style={styles.image}
            >
              <Text style={styles.title}>{item.name}</Text>
              {item.startDate <= todayDate ? (
                <Text style={styles.dateText}>
                  {item.startDate} - {item.endDate}
                </Text>
              ) : (
                ""
              )}
              {item.startDate >= todayDate ? (
                <Text>Ending {item.endDate}</Text>
              ) : (
                ""
              )}
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  challengeCard: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 150,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    flexwrap: "wrap",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  title: {
    fontSize: 14,
    position: "absolute",
    top: 10,
    left: 10,
    padding: 5,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#00A14B",
  },
  dateText: {
    fontSize: 12,
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 5,
    color: "#00A14B",
    borderColor: "#00A14B",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },
});
