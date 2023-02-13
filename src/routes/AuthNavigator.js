import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { paths } from "../config";

import { Starter, Stage, SignUp, Login, Home } from "../screens";
import RootNavigation from "./RootNavigation";

const Stack = createStackNavigator();

function AuthNavigator(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={paths.STARTER} component={Starter} />
            <Stack.Screen name={paths.STAGE} component={Stage} />
            <Stack.Screen name={paths.SIGNUP} component={SignUp} />
            <Stack.Screen name={paths.LOGIN} component={Login} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;