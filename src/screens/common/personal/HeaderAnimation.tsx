import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
  TextInput,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import React, { useRef } from 'react'
import COLORS from '@constants/colors'
import { BambooIcon } from '@assets/index'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

const UPPER_HEADER_HEIGHT = 32
const UPPER_HEADER_PADDING_TOP = 32
const LOWER_HEADER_HEIGHT = 96

const HeaderAnimation = () => {
  const animatedValue = useRef(new Animated.Value(0)).current
  const scrollViewRef = useRef<ScrollView>(null)
  const lastOffsetY = useRef(0)
  const scrollDirection = useRef('')

  const depositViewAnimation = getFeatureViewAnimation(animatedValue, 36)
  const withdrawViewAnimation = getFeatureViewAnimation(animatedValue, -16)
  const qrViewAnimation = getFeatureViewAnimation(animatedValue, -56)
  const scanViewAnimation = getFeatureViewAnimation(animatedValue, -92)
  //   const heightTest = {
  //     transform: [
  //       {
  //         translateY: animatedValue.interpolate({
  //           inputRange: [0, 100],
  //           outputRange: [0, -100],
  //           extrapolate: 'clamp'
  //         })
  //       }
  //     ]
  //   }

  const featureIconCircleAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
  }
  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp'
        })
      }
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
  }
  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
  }

  const textInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp'
        })
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp'
        })
      }
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      {/* 
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView> */}

      <SafeAreaView
        style={[
          styles.header
          //  heightTest
        ]}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={BambooIcon}
              style={[styles.icon16, { marginLeft: 8 }]}
            />
            <AnimatedTextInput
              placeholder='Tìm kiếm'
              placeholderTextColor='rgba(255, 255, 255, 0.8)'
              style={[styles.searchInput, textInputAnimation]}
            />
          </View>

          <Image source={BambooIcon} style={styles.bell} />
          <Image source={BambooIcon} style={styles.avatar} />
        </View>

        <View style={[styles.lowerHeader]}>
          <TouchableOpacity
            onPress={() => {
              console.log('click')
            }}>
            <Animated.View style={[styles.feature, depositViewAnimation]}>
              <Animated.Image
                source={BambooIcon}
                style={[styles.featureIcon, featureIconAnimation]}
              />
              <Animated.Image
                source={BambooIcon}
                style={[styles.icon32, featureIconCircleAnimation]}
              />
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                NẠP TIỀN
              </Animated.Text>
            </Animated.View>
          </TouchableOpacity>

          <Animated.View style={[styles.feature, withdrawViewAnimation]}>
            <Animated.Image
              source={BambooIcon}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={BambooIcon}
              style={[styles.icon32, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              RÚT TIỀN
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, qrViewAnimation]}>
            <Animated.Image
              source={BambooIcon}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={BambooIcon}
              style={[styles.icon32, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              MÃ QR
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, scanViewAnimation]}>
            <Animated.Image
              source={BambooIcon}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={BambooIcon}
              style={[styles.icon32, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              QUÉT MÃ
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>

      <ScrollView
        style={{ backgroundColor: 'red' }}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(e) => {
          console.log(animatedValue)
          console.log('scrollDirection.current', scrollDirection.current)
          const offsetY = e.nativeEvent.contentOffset.y
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up'
          lastOffsetY.current = offsetY
          animatedValue.setValue(offsetY)
        }}
        onScrollEndDrag={() => {
          //   scrollViewRef.current?.scrollTo({
          //     y: scrollDirection.current === 'down' ? 100 : 0,
          //     animated: true
          //   })
          animatedValue.setValue(scrollDirection.current === 'down' ? 100 : 0)
        }}
        scrollEventThrottle={16}>
        {/* <View style={styles.spaceForHeader} /> */}
        <View style={styles.scrollViewContent}>
          {Array(200)
            .fill(0)
            .map((_, index) => (
              <Text>{index}</Text>
            ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default HeaderAnimation

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon16: {
    width: 16,
    height: 16
  },
  icon32: {
    width: 32,
    height: 32
  },
  upperHeaderPlaceholder: {
    height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
    paddingTop: UPPER_HEADER_PADDING_TOP
  },
  header: {
    // position: 'absolute',
    width: '100%',
    backgroundColor: '#AF0C6E'
    // zIndex: 100
  },
  upperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
    paddingTop: UPPER_HEADER_PADDING_TOP
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 8
  },
  bell: {
    width: 16,
    height: 16,
    marginHorizontal: 32
  },
  avatar: {
    width: 28,
    height: 28
  },
  lowerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: LOWER_HEADER_HEIGHT,
    paddingHorizontal: 16
  },
  searchInput: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 32
  },
  feature: {
    alignItems: 'center'
  },
  featureName: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginTop: 12
  },
  spaceForHeader: {
    height: LOWER_HEADER_HEIGHT
  },
  scrollViewContent: {
    height: 1000,
    backgroundColor: 'white'
  }
})

export const getFeatureViewAnimation = (animatedValue, outputX: number) => {
  const TRANSLATE_X_INPUT_RANGE = [0, 80]
  const translateY = {
    translateY: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    })
  }
  return {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: TRANSLATE_X_INPUT_RANGE,
          outputRange: [0, outputX],
          extrapolate: 'clamp'
        })
      },
      translateY
    ]
  }
}
