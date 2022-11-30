import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginTop: 50,
        marginBottom: 25,
    },
    inputContainer: {
        width: "100%",
        justifyContent: "center",
        borderRadius: 2,
        paddingVertical: 30,
    },
    inputTitle: {
        textAlign: "center",
        paddingBottom: 20,
        color: colors.grey,
        fontSize: 16,
    },
    input: {
        fontSize: 70,
        paddingBottom: 50,
        textAlign: "center",
    },
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-evenly"

    },
    button: {
    },

})