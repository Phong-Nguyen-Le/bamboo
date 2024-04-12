import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "@constants/colors";

const IncomeInfo = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text>Chưa có thông tin</Text>
        </View>
    );
};

export default IncomeInfo;

const styles = StyleSheet.create({});
