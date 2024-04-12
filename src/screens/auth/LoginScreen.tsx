import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Animated,
  Dimensions
} from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginInput from './LoginInput'
import COLORS from '@constants/colors'
import { Checkbox } from 'react-native-paper'
import { BambooIcon } from '@assets/index'
import { useAuth } from '@contexts/AuthContext'
import CustomButton from '@components/CustomButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Toast, { ToastProps } from 'react-native-toast-message'

const LoginScreen = () => {
  const { top } = useSafeAreaInsets()
  const [userInput, setUserInput] = React.useState({
    username: 'admin',
    password: '123456'
  })
  const [checked, setChecked] = React.useState(false)
  const handleChangeInput = (value: string, keyInput: string) => {
    setUserInput({ ...userInput, [keyInput]: value })
  }
  const { onSetToken } = useAuth()
  const onSubmit = async ({
    username,
    password
  }: {
    username: string
    password: string
  }) => {
    try {
      if (!username || !password) {
        throw new Error('Vui lòng nhập đủ thông tin')
      }
      let result = {
        accessToken: ''
      }
      if (username && password) {
        result.accessToken = 'FAKE_TOKEN'
      }
      if (result.accessToken) {
        onSetToken(result.accessToken)
      }
    } catch (error) {
      let errorMessage = 'Unknown error occurred'
      if (error instanceof Error) {
        errorMessage = error.message
      }
      Toast.show({
        type: 'error',
        text1: 'Đã xảy ra lỗi',
        text2: errorMessage
      })
      console.log(error)
    }
  }

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: top, backgroundColor: COLORS.white }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 300
        }}>
        <Image
          source={BambooIcon}
          resizeMode='stretch'
          style={{ width: 250, height: 220 }}
        />

        <Text
          style={{
            color: COLORS.primary,
            fontWeight: '700',
            fontSize: 18,
            letterSpacing: 0.7
          }}>
          Xin chào!
        </Text>
      </View>

      <View style={{ marginHorizontal: 30, flex: 1 }}>
        <LoginInput
          value={userInput.username}
          handleChangeInput={handleChangeInput}
          keyInput='username'
          label='Tài khoản'
          placeholder='Nhập tài khoản'
        />

        <View style={{ marginBottom: 10 }} />
        <LoginInput
          value={userInput.password}
          handleChangeInput={handleChangeInput}
          keyInput='password'
          label='Mật khẩu'
          placeholder='Nhập mật khẩu'
          passwordType
        />
        <View style={{ marginBottom: 10 }} />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            setChecked(!checked)
          }}>
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            color={COLORS.primary}
            uncheckedColor={COLORS.white}
          />
          <Text style={{ color: COLORS.white }}>Lưu mật khẩu</Text>
        </TouchableOpacity>

        <CustomButton
          title='Đăng nhập'
          onPress={() => {
            onSubmit(userInput)
          }}
          style={styles.button}
        />

        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: '500',
            color: COLORS.black,
            fontStyle: 'italic',
            marginTop: 100
          }}>
          Chưa có tài khoản?{' '}
          <Text
            style={{
              textDecorationLine: 'underline',
              color: COLORS.primary,
              fontStyle: 'normal'
            }}>
            Đăng ký tại đây!
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: COLORS.primary,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    marginHorizontal: 10
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(128, 128, 128, 0.6)'
  }
})
