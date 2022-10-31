import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";

export type StackParamList = {
    Home: NavigatorScreenParams<NBottomTabParamList>
    Login: undefined
    Register: undefined
    Forgot: undefined
}

export type NBottomTabParamList = {
    News: undefined
    Profile: undefined
    Friends: undefined
    Settings: undefined
}


type UseNavigationType = NavigationProp<StackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()