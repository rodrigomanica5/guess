import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: colors.white,
        height: "10%",
        width: "80%",
        marginHorizontal: "auto",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        borderBottomColor: colors.black,
        borderBottomWidth: 0.5,
    },
    text: {
        fontSize: 30,
        fontWeight: "700",
    },
})