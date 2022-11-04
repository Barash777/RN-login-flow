import {StyleSheet} from "react-native";

const buttonBGColor = '#5bacec'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    stackScreen: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        marginHorizontal: 25,
        marginVertical: 10,
        // width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    button: {
        backgroundColor: buttonBGColor,
        alignItems: "center",
        padding: 10,
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 10,
    }
});