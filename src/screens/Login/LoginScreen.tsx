import React, {useState} from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {styles} from "../../styles/main";

export const LoginScreen = () => {
    // const login = useAppSelector(state => state.user.login)
    // const dispatch = useAppDispatch()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onPressHandler = () => {
        // dispatch(addChar())
    }

    return (
        <View style={styles.stackScreen}>
            {/*<Text>login_test: {login}</Text>*/}
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
            {/*<Text>Login screen</Text>*/}
            {/*<Button title={'add char'} onPress={onPressHandler}/>*/}
        </View>
    );
};