import * as React from "react";

import SignIn from "../components/SignIn";
import Register from "../components/Register";
import {Text, View} from "react-native";

export default function RegisterSignIn() {
    return (

        <View>

            Page inscription/connexion
            <Text>Déjà membre ?</Text>
            <SignIn />
            <Text>Inscription</Text>
            <Register />
            <Text /*name="spaceDivider"*/></Text>
        </View>
    );

}
