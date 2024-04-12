import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import SkeletonComponent from './SkeletonComponent'

interface CustomImageProps extends FastImageProps {
  containerStyle?: ViewStyle
}

const CustomImage: React.FC<CustomImageProps> = ({
  containerStyle,
  source,
  style,
  ...props
}) => {
  const [loading, setLoading] = React.useState(true)
  return (
    <View style={[styles.container, containerStyle]}>
      <FastImage
        style={style}
        source={source}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        resizeMode='cover'
        {...props}
      />
    </View>
  )
}

export default React.memo(CustomImage)

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60
  },
  activityIndicator: {
    position: 'absolute'
  }
})
