import * as React from "react";
import { gql, useQuery } from "@apollo/client";
import { Text, FlatList } from "react-native";

const GET_ALL_USERS = gql`
  query getAllUsers {
  getAllUsers {
    id
    email
  }
}
`;

export default function HomeMember() {  
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  console.log(data)
  return (
    <FlatList
      data={data.getAllUsers}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => (
        <Text>
          {item.email}
        </Text>
      )}
    />
  );
}
