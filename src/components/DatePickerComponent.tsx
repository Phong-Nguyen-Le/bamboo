import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import DateTimePickerModal, {
    DateTimePickerProps,
} from "react-native-modal-datetime-picker";
import { ViewStyle } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import COLORS from "@constants/colors";
import Entypo from "react-native-vector-icons/Entypo";

const DatePickerComponent = ({
    placeholder,
    date,
    handleDateChange,
    keyInput,
    inputContainer,
    sizeIcon,
    isSave = false,
    disabled = false,
    mode = "date",
    customIcon,
    minimumDate,
}: {
    placeholder?: string;
    date: Date | null;
    handleDateChange: any;
    keyInput: string;
    inputContainer?: ViewStyle | any;
    sizeIcon?: number;
    isSave?: boolean;
    disabled?: boolean;
    mode?: "date" | "time" | "datetime";
    customIcon?: string;
    minimumDate?: Date;
}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date: any) => {
        handleDateChange(date, keyInput);
        hideDatePicker();
    };
    const sizeIcons = sizeIcon ? sizeIcon : 20;
    return (
        <>
            <TouchableOpacity
                onPress={showDatePicker}
                style={[
                    styles.container,
                    inputContainer,
                    !!disabled && { backgroundColor: COLORS.white },
                ]}
                disabled={disabled}
            >
                <Text
                    style={{
                        // fontSize: 15,
                        color:
                            !!date && !!disabled
                                ? "#999aa2"
                                : !!date
                                ? COLORS.primary
                                : COLORS.gray,
                    }}
                >
                    {date
                        ? moment(date).format(
                              mode === "date"
                                  ? "DD/MM/YYYY"
                                  : mode === "datetime"
                                  ? "DD/MM/YYYY - HH:mm"
                                  : "HH:mm"
                          )
                        : `${placeholder}`}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        handleConfirm("");
                    }}
                >
                    {mode == "date" ? (
                        <Entypo
                            name="calendar"
                            color={COLORS.primary}
                            size={20}
                        />
                    ) : (
                        <Entypo name="clock" color={COLORS.primary} size={20} />
                    )}
                    {/* <Image
            source={
              customIcon
                ? customIcon
                : mode == 'date'
                ? localImages().dateicon
                : mode == 'time'
                ? localImages().timeicon
                : localImages().dateicon
            }
            style={{ width: sizeIcons, height: sizeIcons }}
            resizeMode='contain'
          /> */}
                </TouchableOpacity>
            </TouchableOpacity>

            <DateTimePickerModal
                date={date ? new Date(date) : new Date()}
                disabled={disabled}
                isVisible={isDatePickerVisible}
                mode={mode}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                confirmTextIOS={"Xác nhận"}
                cancelTextIOS={"Hủy bỏ"}
                locale="VI"
                minimumDate={minimumDate}
            />
        </>
    );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
});
