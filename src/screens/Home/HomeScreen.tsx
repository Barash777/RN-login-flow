import React from 'react';
import {Text, View} from "react-native";
import {styles} from "../../styles/main";
// import {useAppNavigation} from "../types";

export const HomeScreen = () => {
    // const navigation = useAppNavigation()

    return (
        <View style={styles.homeContainer}>
            <Text>HOME</Text>
        </View>
    );
};