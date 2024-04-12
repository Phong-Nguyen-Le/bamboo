import {
    KeyboardTypeOptions,
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
    TextStyle,
} from "react-native";
import React, { useState } from "react";
import COLORS from "@constants/colors";

const TextInputComponent = <T extends string | number>(
    props: {
        text: T | null;
        placeHolderTitle?: string | null;
        handleChangeInput: (txt: T, keyInput: string) => void;
        inputContainer?: StyleProp<ViewStyle>;
        styleContainer?: StyleProp<TextStyle>;
        keyInput: T;
        isRequired?: boolean;
        numberType?: boolean;
        editable?: boolean;
        keyboardType?: KeyboardTypeOptions;
    } & TextInputProps
) => {
    const {
        handleChangeInput,
        inputContainer,
        styleContainer,
        isRequired = false,
        numberType = false,
        editable = true,
        keyboardType = "default",
        keyInput,
        text,
        placeHolderTitle,
        ...rest
    } = props;
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View
            style={[
                styles.container,
                inputContainer,
                { backgroundColor: !editable ? COLORS.primary : "white" },
            ]}
        >
            <TextInput
                editable={editable}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                multiline
                onChangeText={(txt) => {
                    let value = numberType ? +txt.replace(/[^0-9]/g, "") : txt;
                    handleChangeInput(value as T, keyInput as string);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={(text as string) || ""}
                style={[
                    {
                        fontSize: 14,
                        paddingTop: 0,
                        paddingBottom: 0,
                        color: !!text ? COLORS.primary : COLORS.secondary,
                    },
                    rest.style,
                    styleContainer,
                ]}
                placeholderTextColor={"gray"}
                keyboardType={keyboardType}
                placeholder={placeHolderTitle || ""}
                {...rest}
            />
        </View>
    );
};

export default TextInputComponent;

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingHorizontal: 8,
        height: 35,
        justifyContent: "center",
    },
});
