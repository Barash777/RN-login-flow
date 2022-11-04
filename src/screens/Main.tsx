import React from 'react';
import {View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "./Login/LoginScreen";
import {RegisterScreen} from "./Register/RegisterScreen";
import {ForgotPasswordScreen} from "./ForgotPassword/ForgotPasswordScreen";
import {HomeScreen} from "./Home/HomeScreen";
import {styles} from "../styles/main";
import {StackParamList} from "./types";

const Stack = createNativeStackNavigator<StackParamList>();

export const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name={"Login"} component={LoginScreen}/>
                <Stack.Screen name={"Register"} component={RegisterScreen}/>
                <Stack.Screen name={"Forgot"} component={ForgotPasswordScreen}/>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
            </Stack.Navigator>
        </View>
    );
};