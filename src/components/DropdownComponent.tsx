import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleProp } from "react-native";
import COLORS from "@constants/colors";

const DropdownComponent = ({
    data,
    value,
    placeHolderTitle,
    handleChangeInput,
    inputContainer,
    selectedTextStyle,
    keyInput,
    disabled,
    customIcon = "chevron-down",
    renderRightIcon,
    placeholderStyle,
}: {
    data: any;
    value: any;
    placeHolderTitle: string;
    handleChangeInput: (
        value: string | number | null,
        keyInput: string
    ) => void;
    inputContainer?: StyleProp<ViewStyle>;
    selectedTextStyle?: StyleProp<TextStyle>;
    keyInput: string;
    disabled?: boolean;
    customIcon?: string;
    renderRightIcon?: any;
    placeholderStyle?: StyleProp<TextStyle>;
}) => {
    const renderRightIconComponent = () => {
        return value && renderRightIcon ? (
            renderRightIcon
        ) : (
            <MaterialCommunityIcons
                name={customIcon}
                size={20}
                color={COLORS.gray}
            />
        );
    };
    const [isFocus, setIsFocus] = useState(false);
    return (
        <Dropdown
            style={[styles.dropdown, inputContainer]}
            placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
            selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            disable={disabled}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeHolderTitle}
            searchPlaceholder="Tìm kiếm..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
                if (item.value == value) {
                    return handleChangeInput(null, keyInput);
                }
                handleChangeInput(item, keyInput);
                setIsFocus(false);
            }}
            renderRightIcon={renderRightIconComponent}
        />
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    //DROPDOWN
    dropdown: {
        borderRadius: 5,
        paddingHorizontal: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    icon: {},
    placeholderStyle: {
        fontSize: 14,
        color: "gray",
    },
    selectedTextStyle: {
        fontSize: 15,
        color: COLORS.primary,
        fontWeight: "500",
    },
    iconStyle: {
        width: 15,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
