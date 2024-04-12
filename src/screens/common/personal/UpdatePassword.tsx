import { StyleSheet,View } from "react-native";
import React from "react";
import COLORS from "@constants/colors";
import LoginInput from "@screens/auth/LoginInput";
import CustomButton from "@components/CustomButton";

const UpdatePassword = () => {
    const [userInput, setUserInput] = React.useState({
        password: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChangeInput = (value: string, keyInput: string) => {
        setUserInput({ ...userInput, [keyInput]: value });
    };
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                paddingHorizontal: 30,
            }}
        >
            <View style={{ flex: 1, marginTop: 20 }}>
                <LoginInput
                    value={userInput.password}
                    handleChangeInput={handleChangeInput}
                    keyInput="password"
                    label="Mật khẩu cũ"
                    placeholder="Nhập mật khẩu cũ"
                    passwordType
                />
                <View style={{ marginBottom: 10 }} />

                <LoginInput
                    value={userInput.newPassword}
                    handleChangeInput={handleChangeInput}
                    keyInput="newPassword"
                    label="Mật khẩu mới"
                    placeholder="Nhập mật khẩu mới"
                    passwordType
                />
                <View style={{ marginBottom: 10 }} />

                <LoginInput
                    value={userInput.confirmPassword}
                    handleChangeInput={handleChangeInput}
                    keyInput="confirmPassword"
                    label="Nhập lại mật khẩu mới"
                    placeholder="Nhập lại mật khẩu mới"
                    passwordType
                />
            </View>

            <CustomButton
                title="Xác nhận"
                onPress={() => {}}
                style={{ marginBottom: 20, backgroundColor: COLORS.blue_dark }}
            />
        </View>
    );
};

export default UpdatePassword;

const styles = StyleSheet.create({});
