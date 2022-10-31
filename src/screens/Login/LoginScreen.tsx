import React from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {styles} from "../../styles/main";

export const LoginScreen = () => {
    const login = useAppSelector(state => state.user.login)
    const dispatch = useAppDispatch()

    const onPressHandler = () => {
        // dispatch(addChar())
    }

    return (
        <View style={styles.stackScreen}>
            {/*<Text>login_test: {login}</Text>*/}
            <TextInput style={styles.input} value={'login'} placeholder={'login'}/>
            <TextInput style={styles.input} value={'password'} placeholder={'password'}/>
            <Text>Login screen</Text>
            <Button title={'add char'} onPress={onPressHandler}/>
        </View>
    );
};