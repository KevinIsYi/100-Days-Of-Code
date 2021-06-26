import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    result: {
        color: 'white',
        fontSize: 60,
        marginBottom: 10,
        textAlign: 'right',
    },
    smallResult: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    file: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        borderRadius: 100,
        height: 80,
        justifyContent: 'center',
        marginHorizontal: 2.5,
        width: 80,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    }
});