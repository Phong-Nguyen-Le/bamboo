import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import COLORS from '@constants/colors'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@react-navigation/core'
import { ROUTE_NAME } from '@navigation/routeName'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeHeader = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProp<any>>()
  return (
    <View style={{ ...styles.container, paddingTop: top + 5 }}>
      <Image
        source={{
          uri: 'https://play-lh.googleusercontent.com/h4CyAr7xQCsK25jo4x_K6czLoi7tz25-M9Wc4xh5WbUWxgEy6XtAP3WlpVFz02-60nk'
        }}
        style={{ width: 40, height: 40, marginRight: 5, borderRadius: 99 }}
        resizeMode='stretch'
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', color: COLORS.white }}>
          Xin chào!
        </Text>
        <Text style={styles.userName}>Phong</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Entypo name='location-pin' color={COLORS.primary} size={20} />
        <Text
          numberOfLines={1}
          style={{ overflow: 'hidden', color: COLORS.primary }}>
          Quận 2, Thành phố Thủ Đức, TP HCM
        </Text>
        <View style={{}}>
          <Entypo name='chevron-right' color={COLORS.primary} size={20} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary
  },
  button: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingRight: 15,
    borderRadius: 5
  },
  userName: {
    color: COLORS.white,
    fontWeight: 'bold',
    letterSpacing: 0.6
  }
})
