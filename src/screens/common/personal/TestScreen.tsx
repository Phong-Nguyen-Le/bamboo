import React from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'

const TestScreen = () => {
  const translateX = new Animated.Value(0)
  const translateY = new Animated.Value(0)
  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )

  return (
    <View style={styles.container}>
      <Text style={styles.text}>A Square</Text>
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <Animated.View
          style={[
            styles.square,
            {
              transform: [
                {
                  translateX: translateX
                },
                {
                  translateY: translateY
                }
              ]
            }
          ]}
        />
      </PanGestureHandler>
      
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 20
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    marginTop: 22,
    marginBottom: 22
  }
})
