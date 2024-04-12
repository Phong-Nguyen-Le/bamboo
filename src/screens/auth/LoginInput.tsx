import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import COLORS from '@constants/colors'

const LoginInput = ({
  value,
  handleChangeInput,
  keyInput,
  label,
  placeholder,
  passwordType = false
}: {
  value: string
  handleChangeInput: (value: string, keyInput: string) => void
  keyInput: string
  placeholder: string
  passwordType?: boolean
  label: string
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <TextInput
      mode='outlined'
      label={label}
      placeholder={placeholder}
      right={
        passwordType && (
          <TextInput.Icon
            onPress={() => setIsShowPassword(!isShowPassword)}
            icon={isShowPassword ? 'eye-off' : 'eye'}
          />
        )
      }
      value={value}
      onChangeText={(text) => handleChangeInput(text, keyInput)}
      style={{ width: '100%', height: 50, justifyContent: 'center' }}
      secureTextEntry={passwordType ? !isShowPassword : false}
      activeOutlineColor={COLORS.primary}
      outlineColor={COLORS.primary}
    />
  )
}

export default LoginInput

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 50,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
    // borderWidth: 1,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,
    // elevation: 3,
  }
})
