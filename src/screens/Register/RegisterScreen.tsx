import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../../styles/main";
import {useAppNavigation} from "../types";
import {register} from "../../app/slices/userSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

export const RegisterScreen = () => {
    const navigation = useAppNavigation()
    const usersList = useAppSelector(state => state.user.registeredUsers)
    const dispatch = useAppDispatch()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onPressHandler = () => {
        // there is registered user or not
        const exist = usersList.some(e => e.login === login)

        // check for exist
        if (exist) {
            Alert.alert('The user with this login is already exist!')
            return
        }

        // register user
        dispatch(register({login, password}))
        Alert.alert('You are successfully registered!')
        navigation.navigate('Login', {login, password})
    }

    return (
        <View style={styles.stackScreen}>
            {/*<Text>usersCount: {usersList.length}</Text>*/}
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
                <Text>Register</Text>
            </TouchableOpacity>
            <View style={styles.buttonsInRow}>
                <TouchableOpacity style={[styles.button, styles.navigationButton]}
                                  onPress={() => navigation.navigate('Login', {})}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.navigationButton]}
                                  onPress={() => navigation.navigate('Forgot')}>
                    <Text>Forgot password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};