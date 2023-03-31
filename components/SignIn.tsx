import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function SignIn() {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleClick = (event: any) => {
    event.preventDefault();
    console.log(username, password);
  };

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <View>
      <form onSubmit={handleClick}>
        <Text>Identifiant</Text>
        <TextInput value="username" onChange={handleUsername}></TextInput>

        <Text>Mot de passe</Text>
        <TextInput value="password" onChange={handlePassword}></TextInput>
        <Button title="Se connecter" />
      </form>
    </View>
  );
}
