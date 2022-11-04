import {StyleSheet} from "react-native";

const buttonBGColor = '#5bacec'
const navigationButtonBGColor = '#f69953'

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    stackScreen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        marginHorizontal: 25,
        marginVertical: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    buttonsInRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: buttonBGColor,
        alignItems: "center",
        padding: 10,
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 10,
    },
    navigationButton: {
        flex: 1,
        backgroundColor: navigationButtonBGColor,
    }
});