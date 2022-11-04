import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useAppNavigation} from "../types";
import {styles} from "../../styles/main";
import {useAppSelector} from "../../app/hooks";

export const ForgotPasswordScreen = () => {
    const navigation = useAppNavigation()
    const usersList = useAppSelector(state => state.user.registeredUsers)

    const [login, setLogin] = useState('');

    const onPressHandler = () => {
        // there is registered user or not
        const user = usersList.find(e => e.login === login)

        // check for exist
        if (user) {
            Alert.alert('You are registered user! Just press "Sign In"')
            navigation.navigate('Login', {login: user.login, password: user.password})
            return
        }

        Alert.alert('The user with this login is not registered yet!')
    }

    return (
        <View style={styles.stackScreen}>
            <TextInput
                style={styles.input}
                autoCapitalize={'none'}
                placeholder={'Login'}
                value={login}
                onChangeText={setLogin}
            />
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                <Text>Restore my password</Text>
            </TouchableOpacity>
            <View style={styles.buttonsInRow}>
                <TouchableOpacity style={[styles.button, styles.navigationButton]}
                                  onPress={() => navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.navigationButton]}
                                  onPress={() => navigation.navigate('Login', {})}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};