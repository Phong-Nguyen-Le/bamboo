import React from 'react'
import {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'

const useInputAnimation = (initialOpacity, initialTransY, duration = 2000) => {
  const opacity = useSharedValue<number>(initialOpacity)
  const translateY = useSharedValue<number>(initialTransY)
  const animate = () => {
    'worklet'
    opacity.value = withSpring(1, { duration: 2000 })
    translateY.value = withSpring(0, { duration: 2000 })
  }
  React.useEffect(() => {
    runOnUI(animate)()
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }]
    }
  })

  return animatedStyle
}

export default useInputAnimation
