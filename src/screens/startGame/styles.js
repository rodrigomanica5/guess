import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginTop: 25,
        marginBottom: 25,
    },
    inputContainer: {
        height: "35%",
        justifyContent: "space-evenly",
        borderRadius: 2,
    },
    inputTitle: {
        textAlign: "center",
        color: colors.grey,
        fontSize: 16,
    },
    input: {
        fontSize: 60,
        textAlign: "center",
    },
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-evenly"

    },
    button: {
    },
    confirmedNumberCard: {
        width: "80%",
        height: "35%",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    confirmedNumberContainer: {
        alignItems: "center",
    },
    confirmedText: {
        color: colors.text,
        fontSize: 16,
    },
})