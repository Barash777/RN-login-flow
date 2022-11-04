import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../../styles/main";
import {LoginPropsType, useAppNavigation} from "../types";
import {useAppSelector} from "../../app/hooks";

export const LoginScreen = ({route}: LoginPropsType) => {
    const navigation = useAppNavigation()
    const usersList = useAppSelector(state => state.user.registeredUsers)

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setLogin(route?.params?.login ?? '')
        setPassword(route?.params?.password ?? '')
    }, [route?.params?.login, route?.params?.password])


    const onPressHandler = () => {
        // there is registered user or not
        const user = usersList.find(e => e.login === login)

        // check for exist
        if (user) {
            if (user.login === login && user.password === password) {
                Alert.alert('You are successfully logged in!')
                navigation.navigate('Home')
                return
            }

            Alert.alert('Login or password is invalid!')
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
            <TextInput
                style={styles.input}
                autoCapitalize={'none'}
                secureTextEntry={true}
                textContentType={'password'}
                placeholder={'Password'}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                <Text>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.buttonsInRow}>
                <TouchableOpacity style={[styles.button, styles.navigationButton]}
                                  onPress={() => navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.navigationButton]}
                                  onPress={() => navigation.navigate('Forgot')}>
                    <Text>Forgot password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};