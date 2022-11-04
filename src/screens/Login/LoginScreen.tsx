import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../../styles/main";
import {useAppNavigation} from "../types";

export const LoginScreen = () => {
    const navigation = useAppNavigation()
    // const login = useAppSelector(state => state.user.login)
    // const dispatch = useAppDispatch()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onPressHandler = () => {
        // dispatch(addChar())
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