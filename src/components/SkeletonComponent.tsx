import React, { useEffect, useRef } from 'react'
import { View, Animated, StyleSheet, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const SkeletonComponent = ({
  containerStyles,
  numberItem = 1
}: {
  containerStyles?: ViewStyle
  numberItem?: Number
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ).start()
  }, [animatedValue])

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 200]
  })

  return (
    <>
      {Array(numberItem)
        .fill(0)
        .map((_, index) => (
          <View style={[styles.skeleton, containerStyles]} key={index}>
            <Animated.View
              style={{
                flex: 1,
                transform: [{ translateX }]
              }}>
              <LinearGradient
                colors={['#E1E9EE', '#F8F8F8', '#E1E9EE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              />
            </Animated.View>
          </View>
        ))}
    </>
  )
}

const styles = StyleSheet.create({
  skeleton: {
    overflow: 'hidden',
    backgroundColor: '#E1E9EE',
    height: '100%',
    width: '100%'
  },
  gradient: {
    height: '100%',
    width: '100%'
  }
})

export default SkeletonComponent
