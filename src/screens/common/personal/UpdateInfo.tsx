import CustomButton from '@components/CustomButton'
import Row from '@components/Row'
import AvatarPickImage from '@components/AvatarPickImage'
import COLORS from '@constants/colors'
import React, { useState } from 'react'
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

const UpdateInfo = () => {
  const [input, setInput] = useState({
    guestName: null,
    guestPhone: null,
    date: null,
    guestNumber: 1
  })

  const handleChangeInput = (
    value: string | number | null,
    keyInput: string
  ) => {
    setInput((pre) => ({
      ...pre,
      [keyInput]: value
    }))
  }

  const [avatar, setAvatar] = useState('')

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageBackground
        source={{
          uri: 'https://www.oceanicworldwide.com/wp-content/uploads/sites/6/2023/06/header_oceanic_terms-and-conditions.jpg'
        }}
        style={{ height: 220 }}
        resizeMode='cover'>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <AvatarPickImage imageFace={avatar} setImageFace={setAvatar} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLORS.textPrimary,
              marginVertical: 5,
              letterSpacing: 2
            }}>
            Nguyễn Lê Phong
          </Text>
          <Text style={{ fontStyle: 'italic', color: COLORS.textPrimary }}>
            Mobile Developer
          </Text>
        </View>
      </ImageBackground>
      <ScrollView style={{ backgroundColor: COLORS.white }}>
        <View
          style={{
            paddingHorizontal: 10,
            flex: 1
          }}>
          <View style={{ marginBottom: 20 }} />
          <Row>
            <View style={styles.icon}>
              <FontAwesome5 name='phone' color={COLORS.white} size={18} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Số điện thoại:</Text>
              <TextInput style={styles.input} value={'0973857045'} />
            </View>
          </Row>
          <View style={{ marginBottom: 20 }} />
          <Row>
            <View style={styles.icon}>
              <Feather name='mail' color={COLORS.white} size={20} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Email:</Text>
              <TextInput
                style={styles.input}
                value={'nglephong197@gmail.com'}
              />
            </View>
          </Row>

          <View style={{ marginBottom: 20 }} />
          <Row>
            <View style={styles.icon}>
              <Ionicons
                name='location-outline'
                color={COLORS.white}
                size={22}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Địa chỉ:</Text>
              <TextInput
                style={styles.input}
                value={'Quận 2, Thành phố Thủ Đức'}
              />
            </View>
          </Row>
        </View>
      </ScrollView>
      <CustomButton
        title='Xác nhận'
        onPress={() => {}}
        style={{
          marginHorizontal: 10,
          marginVertical: 20,
          marginBottom: 10
        }}
      />
    </SafeAreaView>
  )
}

export default UpdateInfo

const styles = StyleSheet.create({
  title: {
    color: COLORS.textPrimary,
    fontWeight: '500',
    fontStyle: 'italic'
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#bababa',
    height: 35,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontWeight: 'bold',
    color: COLORS.textPrimary
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginLeft: 5,
    marginRight: 15
  }
})
