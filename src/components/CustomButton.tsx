import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import COLORS from '@constants/colors'
import LinearGradient from 'react-native-linear-gradient'

const CustomButton = ({
  title,
  onPress,
  theme = 'primary',
  style
}: {
  title: string
  onPress: () => void
  theme?: 'primary' | 'secondary'
  style?: ViewStyle
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#00ed0d', '#00ab09', '#004404']}
        style={[styles.button, style]}>
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 16,
            letterSpacing: 1
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
    minWidth: 135,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center'
  }
})
