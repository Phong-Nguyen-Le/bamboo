import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native'
import React from 'react'
import Row from '@components/Row'
import COLORS from '@constants/colors'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

const ContactScreen = () => {
  const phoneNumber = '1900-3007'
  const handleCallPress = () => {
    Alert.alert(
      'Call Confirmation',
      `Do you want to call ${phoneNumber}?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Call', onPress: () => Linking.openURL(`tel:${phoneNumber}`) }
      ],
      { cancelable: false }
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ padding: 10, marginTop: 20 }}>
          <Row style={{ marginBottom: 15 }}>
            <View style={styles.icon}>
              <FontAwesome6 name='building' color={COLORS.info} size={20} />
            </View>
            <Text style={styles.title}>Công ty Cổ phần Bambooship</Text>
          </Row>

          <Row style={{ marginBottom: 15 }}>
            <View style={styles.icon}>
              <Entypo name='location' color={COLORS.info} size={20} />
            </View>
            <Text style={styles.title}>
              132A Nguyễn Trọng Tuyển, Phường 8 Quận Phú Nhuận, TPHCM
            </Text>
          </Row>

          <Row style={{ marginBottom: 15 }}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name='certificate-outline'
                color={COLORS.info}
                size={20}
              />
            </View>
            <Text style={styles.title}>
              Giấy chứng nhận Đăng ký Kinh doanh số 0315825678 do Sở Kế hoạch và
              Đầu tư Thành phố Hồ Chí Minh cấp ngày 05/07/2021.
            </Text>
          </Row>

          <Row style={{ marginBottom: 15 }}>
            <View style={styles.icon}>
              <FontAwesome6 name='globe' color={COLORS.info} size={20} />
            </View>
            <Text style={styles.title}>https://bambooship.vn/</Text>
          </Row>

          <Row style={{ marginBottom: 15 }}>
            <View style={styles.icon}>
              <Feather name='mail' color={COLORS.info} size={20} />
            </View>
            <Text style={styles.title}>contact@bambooship.vn</Text>
          </Row>

          <Row style={{ marginBottom: 15 }}>
            <View style={styles.icon}>
              <Feather name='phone-call' color={COLORS.info} size={20} />
            </View>
            <Text style={styles.title}>1900 3007</Text>
          </Row>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            position: 'relative',
            alignItems: 'center',
            marginHorizontal: 20
          }}>
          <View
            style={{
              position: 'absolute',
              width: 40,
              height: 40,
              backgroundColor: COLORS.white,
              bottom: -20,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <MaterialCommunityIcons
              name='leaf-maple'
              color={COLORS.primary}
              size={30}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginTop: 20,
            justifyContent: 'space-between'
          }}>
          <LinearGradient
            colors={['#b1ffb5', '#00cd0b', '#004b04']}
            style={styles.button}>
            <TouchableOpacity
              style={{
                ...styles.button,
                width: '100%',
                paddingHorizontal: 15
              }}>
              <Entypo name='credit-card' color={COLORS.white} size={30} />
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: '700',
                  flex: 1,
                  letterSpacing: 0.5,
                  textAlign: 'center'
                }}>
                {'Chính sách\nthanh toán'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#b1ffb5', '#00cd0b', '#004b04']}
            style={styles.button}>
            <TouchableOpacity
              style={{
                ...styles.button,
                width: '100%',
                paddingHorizontal: 15
              }}>
              <MaterialCommunityIcons
                name='shield-account'
                color={COLORS.white}
                size={30}
              />
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: '700',
                  flex: 1,
                  letterSpacing: 0.5,
                  textAlign: 'center'
                }}>
                {'Chính sách\nbảo mật'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <TouchableOpacity
          onPress={handleCallPress}
          style={{ position: 'absolute', bottom: 20, right: 20 }}>
          <LinearGradient
            colors={['#c7ffba', '#25c700', '#0f4b00']}
            style={styles.phoneButton}>
            <FontAwesome5 name='phone-alt' color={COLORS.white} size={25} />
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  title: {
    flex: 1,
    color: COLORS.black
  },
  icon: {
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 99,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.backgroundSecondary,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginRight: 10
  },
  button: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 15,
    // paddingVertical: 15,
    // backgroundColor: COLORS.violet,
    borderRadius: 10,
    height: 80
  },
  phoneButton: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.success,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
