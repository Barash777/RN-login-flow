import React from 'react';
import {View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "./Login/LoginScreen";
import {RegisterScreen} from "./Register/RegisterScreen";
import {ForgotPasswordScreen} from "./ForgotPassword/ForgotPasswordScreen";
import {styles} from "../styles/main";

const Stack = createNativeStackNavigator();

export const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Forgot" component={ForgotPasswordScreen}/>
            </Stack.Navigator>
        </View>
    );
};