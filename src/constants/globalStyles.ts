import { StyleSheet } from "react-native";
import COLORS from "./colors";

const GlobalStyles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: COLORS.violet,
        paddingBottom: 5,
        letterSpacing: 0.4,
    },
    mbm: {
        marginBottom: 10,
    },
    mbl: {
        marginBottom: 20,
    },
    footerContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: COLORS.white,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        padding: 15,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 3,
    },

    // Add other global styles as needed
});

export default GlobalStyles;
