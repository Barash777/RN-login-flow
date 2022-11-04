import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {useAppNavigation} from "../types";
import {styles} from "../../styles/main";

export const ForgotPasswordScreen = () => {
    const navigation = useAppNavigation()
    // const login = useAppSelector(state => state.user.login)
    // const dispatch = useAppDispatch()

    const [login, setLogin] = useState('');

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
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                <Text>Restore my password</Text>
            </TouchableOpacity>
            <View style={styles.buttonsInRow}>
                <TouchableOpacity style={[styles.button, styles.navigationButton]}
                                  onPress={() => navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.navigationButton]}
                                  onPress={() => navigation.navigate('Login')}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};