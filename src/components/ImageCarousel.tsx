import COLORS from '@constants/colors'
import * as React from 'react'
import { useState } from 'react'
import { View, Dimensions, Text, Image, TouchableOpacity } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'
import ImageView from 'react-native-image-viewing'

const { width: screenWidth } = Dimensions.get('window')
const PAGE_WIDTH = screenWidth

const imageList = [
  'https://img.freepik.com/premium-psd/mega-sale-discount-banner-template-promotion_501916-114.jpg',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/super-sale-banner-ads-template-design-3bbbdcd2caaba3805ecdebc99282ed00_screen.jpg?ts=1614008338',
  'https://www.shutterstock.com/image-vector/sale-banner-template-design-geometric-600nw-2127203576.jpg'
]

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function getRandomColorArray(length) {
  const colors: string[] = []
  for (let i = 0; i < length; i++) {
    colors.push(getRandomColor())
  }
  return colors
}

function ImageCarousel() {
  const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true)
  const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true)
  const progressValue = useSharedValue<number>(0)
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.5
  } as const

  const [visible, setIsVisible] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const colorArray = getRandomColorArray(imageList.length)

  return (
    <View
      style={{
        alignItems: 'center'
      }}>
      <Carousel
        {...baseOptions}
        style={{
          width: PAGE_WIDTH
        }}
        loop
        windowSize={3} //When rendering a large number of elementsuse the 'windowSize' property to control how many items of the current element are rendered
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={true}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50
        }}
        data={imageList}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIsVisible(true)
                setImageIndex(index)
              }}
              style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: 10,
                overflow: 'hidden'
              }}>
              <Image
                source={{ uri: item }}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
              />
            </TouchableOpacity>
          )
        }}
      />
      {!!progressValue && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 100,
            alignSelf: 'center'
          }}>
          {colorArray.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={backgroundColor}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={false}
                length={colorArray.length}
              />
            )
          })}
        </View>
      )}
      <ImageView
        images={imageList.map((item) => ({ uri: item }))}
        imageIndex={imageIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  )
}

const PaginationItem: React.FC<{
  index: number
  backgroundColor: string
  length: number
  animValue: Animated.SharedValue<number>
  isRotate?: boolean
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props
  const width = 10

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1]
    let outputRange = [-width, 0, width]

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1]
      outputRange = [-width, 0, width]
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP
          )
        }
      ]
    }
  }, [animValue, index, length])
  return (
    <View
      style={{
        borderWidth: 1,
        backgroundColor: 'white',
        width,
        height: width,
        borderRadius: 50,
        overflow: 'hidden',
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg'
          }
        ]
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1
          },
          animStyle
        ]}
      />
    </View>
  )
}

export default ImageCarousel
