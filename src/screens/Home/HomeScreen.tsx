import React from 'react';
import {View} from "react-native";
import {styles} from "../../styles/main";
import {NBottomTabParamList} from "../types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NewsScreen} from "./News/NewsScreen";
import {ProfileScreen} from "./Profile/ProfileScreen";
import {FriendsScreen} from "./Friends/FriendsScreen";
import {SettingsScreen} from "./Settings/SettingsScreen";

const Tabs = createBottomTabNavigator<NBottomTabParamList>();

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'red', headerShown: false}}>
                <Tabs.Screen name={'News'} component={NewsScreen}/>
                <Tabs.Screen name={'Profile'} component={ProfileScreen}/>
                <Tabs.Screen name={'Friends'} component={FriendsScreen}/>
                <Tabs.Screen name={'Settings'} component={SettingsScreen}/>
            </Tabs.Navigator>
        </View>
    );
};