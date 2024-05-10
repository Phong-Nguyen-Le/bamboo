import COLORS from '@constants/colors'
import { useAuth } from '@contexts/AuthContext'
import { ROUTE_NAME } from '@navigation/routeName'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PersonalScreen = () => {
  const { navigate } = useNavigation<any>()

  const { onLogout } = useAuth()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => navigate(ROUTE_NAME.UpdateInfo)}
          style={{
            ...styles.button,
            height: 70
          }}>
          <Image
            source={{
              uri: 'https://play-lh.googleusercontent.com/h4CyAr7xQCsK25jo4x_K6czLoi7tz25-M9Wc4xh5WbUWxgEy6XtAP3WlpVFz02-60nk'
            }}
            resizeMode='contain'
            style={{ width: 40, height: 40, marginHorizontal: 15 }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                ...styles.buttonTitle,
                color: COLORS.success,
                marginBottom: 5,
                fontSize: 16
              }}>
              Phong
            </Text>
            <Text>0973857045</Text>
          </View>
          <Entypo name='chevron-right' color={COLORS.primary} size={20} />
        </TouchableOpacity>

        <View style={{ marginBottom: 10 }} />

        <TouchableOpacity
          style={{
            ...styles.button
          }}>
          <View style={styles.icon}>
            <Ionicons name='settings-sharp' color={COLORS.primary} size={30} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.buttonTitle}>Cài đặt</Text>
          </View>
          <Entypo name='chevron-right' color={COLORS.primary} size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate(ROUTE_NAME.UpdatePassword)}
          style={{
            ...styles.button
          }}>
          <View style={styles.icon}>
            <FontAwesome6 name='key' color={COLORS.primary} size={25} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.buttonTitle}>Đổi mật khẩu</Text>
          </View>
          <Entypo name='chevron-right' color={COLORS.primary} size={20} />
        </TouchableOpacity>

        <View style={{ marginBottom: 40 }} />

        <TouchableOpacity
          onPress={() => navigate(ROUTE_NAME.UpdateInfo)}
          style={{
            ...styles.button
          }}>
          <View style={styles.icon}>
            <Entypo name='message' color={COLORS.primary} size={25} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.buttonTitle}>Phản hồi</Text>
          </View>
          <Entypo name='chevron-right' color={COLORS.primary} size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate(ROUTE_NAME.HeaderAnimation)}
          style={{
            ...styles.button
          }}>
          <View style={styles.icon}>
            <Entypo name='message' color={COLORS.primary} size={25} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.buttonTitle}>Header Animation</Text>
          </View>
          <Entypo name='chevron-right' color={COLORS.primary} size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate(ROUTE_NAME.TestScreen)}
          style={{
            ...styles.button
          }}>
          <View style={styles.icon}>
            <Entypo name='message' color={COLORS.primary} size={25} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.buttonTitle}>React Native Pan Gesture</Text>
          </View>
          <Entypo name='chevron-right' color={COLORS.primary} size={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          ...styles.button,
          marginBottom: 20,
          backgroundColor: COLORS.error
        }}
        onPress={onLogout}>
        <View style={styles.icon}>
          <FontAwesome name='power-off' color={COLORS.white} size={20} />
        </View>
        <Text
          style={{
            ...styles.buttonTitle,
            flex: 1,
            color: COLORS.white
          }}>
          Đăng xuất
        </Text>
        <Entypo name='chevron-right' color={COLORS.white} size={20} />
      </TouchableOpacity>
    </View>
  )
}

export default PersonalScreen

const styles = StyleSheet.create({
  button: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingRight: 10
  },
  buttonTitle: {
    color: COLORS.info,
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.6
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
