import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import COLORS from '@constants/colors'
import moment from 'moment'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Row from '@components/Row'
import Entypo from 'react-native-vector-icons/Entypo'

const { width: screenWidth } = Dimensions.get('window')

const News = () => {
  const [data, setData] = useState<any>([
    {
      id: 1,
      title:
        'CHỐT ĐƠN NGAY VỚI ƯU ĐÃI SIÊU KHỦNG CHO NHÀ BÁN HÀNG SỬ DỤNG DỊCH VỤ HARAVAN VÀ BAMBOOSHIP',
      date: new Date(),
      content: 'test1',
      image:
        'https://bambooship.cdn.vccloud.vn/wp-content/uploads/2022/11/Bambooship-Haravan-1-1024x911.jpg'
    },
    {
      id: 2,
      title: 'Thị trường Thương mại Điện tử Việt Nam – “miếng bánh béo bở”',
      date: new Date(),
      content: 'test2',
      image:
        'https://bambooship.cdn.vccloud.vn/wp-content/uploads/2022/10/TMDT-VN.jpg'
    },
    {
      id: 3,
      title:
        'KHAI TRƯƠNG CHI NHÁNH MIỀN BẮC – CÙNG BAMBOOSHIP NẮM BẮT CƠ HỘI START-UP',
      date: new Date(),
      content: 'test3',
      image:
        'https://bambooship.cdn.vccloud.vn/wp-content/uploads/2022/10/Phuc-Tho-1.jpg'
    },
    {
      id: 4,
      title: 'HỘI NGHỊ BAMBOOSHIP TOÀN QUỐC LẦN THỨ 3',
      content: 'test4',
      image:
        'https://bambooship.cdn.vccloud.vn/wp-content/uploads/2022/07/2022-07-22_16-11-1024x515.png'
    }
  ])

  return (
    <>
      <Row between style={{ marginBottom: 5 }}>
        <Text style={styles.textHeader}>TIN TỨC</Text>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Row>
            <Text style={{ ...styles.title, ...styles.moreButton }}>
              Xem thêm
            </Text>
            <Entypo
              name='chevron-small-right'
              color={COLORS.primary}
              size={20}
            />
          </Row>
        </TouchableOpacity>
      </Row>
      <View style={styles.container}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{ width: screenWidth / 2, alignItems: 'center' }}>
            <View style={{ width: '90%' }}>
              <View style={styles.image}>
                <Image
                  source={{ uri: item.image }}
                  resizeMode='stretch'
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 12
                }}>
                <AntDesign
                  name='clockcircle'
                  color={COLORS.grayMedium}
                  size={12}
                />{' '}
                {moment(item.date).format('HH:mm DD/MM/YYYY')}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  )
}

export default News

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 20 },
  textHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
    marginHorizontal: 20
  },
  moreButton: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginHorizontal: 0
  },
  title: {
    textTransform: 'uppercase',
    color: COLORS.textPrimary,
    marginVertical: 5,
    fontSize: 12
  },
  image: {
    height: 110,
    borderRadius: 10,
    overflow: 'hidden'
  }
})
