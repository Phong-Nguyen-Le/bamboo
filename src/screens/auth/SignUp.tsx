import BottomSelectBox from '@components/BottomSelectBox'
import BottomSheet, { BottomSheetRefProps } from '@components/BottomSheet'
import useInputAnimation from 'hooks/animation/useInputAnimation'
import useBankSelectBox from 'hooks/useBankSelectBox'
import React, { useCallback, useRef } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const SignUp = () => {
  const ref = useRef<BottomSheetRefProps>(null)
  const { data } = useBankSelectBox()

  return (
    <View style={{ flex: 1 }}>
      <TextInputComponent />
      <TextInputComponent />
      <TextInputComponent />
      <TextInputComponent />
      <TextInputComponent />
      <TextInputComponent />
      <BottomSelectBox data={data} />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
    alignSelf: 'center'
  },
  title: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: 8
  },
  label: {
    fontSize: 24,
    marginVertical: 16,
    color: '#b58df1'
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6
  }
})

const TextInputComponent = () => {
  const animatedStyle = useInputAnimation(0, 50, 2000)
  return (
    <Animated.View style={animatedStyle}>
      <Text>Label 1</Text>
      <TextInput
        style={{
          width: 200,
          height: 40,
          backgroundColor: 'lightgrey',
          marginBottom: 10
        }}
        placeholder='TextInput 1'
      />
    </Animated.View>
  )
}
