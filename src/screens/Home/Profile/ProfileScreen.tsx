import React from 'react';
import {Text, View} from "react-native";
import {styles} from "../../../styles/main";
import {useAppSelector} from "../../../app/hooks";

export const ProfileScreen = () => {
    const login = useAppSelector(state => state.user.user.login)

    return (
        <View style={styles.homeContainer}>
            <Text>Profile</Text>
            <Text>login: {login}</Text>
        </View>
    );
};