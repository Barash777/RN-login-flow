import React from 'react';
import {StyleSheet, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "./Login/LoginScreen";
import {RegisterScreen} from "./Register/RegisterScreen";
import {ForgotPasswordScreen} from "./ForgotPassword/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

export const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator
                // screenOptions={{navigationBarHidden: true}}
            >
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Forgot" component={ForgotPasswordScreen}/>
            </Stack.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});