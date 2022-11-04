import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type LoginParamList = {
    login?: string
    password?: string
}

export type StackParamList = {
    Home: undefined,//NavigatorScreenParams<NBottomTabParamList>
    Login: LoginParamList
    Register: undefined
    Forgot: undefined
}

export type NBottomTabParamList = {
    News: undefined
    Profile: undefined
    Friends: undefined
    Settings: undefined
}

export type LoginPropsType = NativeStackScreenProps<StackParamList, 'Login'>
type UseNavigationType = NavigationProp<StackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()