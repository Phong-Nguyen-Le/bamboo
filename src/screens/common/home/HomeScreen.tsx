import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import React from 'react'
import ImageCarousel from '@components/ImageCarousel'
import COLORS from '@constants/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@react-navigation/core'
import CategoryMenu from './components/CategoryMenu'
import News from './components/News'

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        style={{ backgroundColor: COLORS.white }}
        showsVerticalScrollIndicator={false}>
        <ImageCarousel />
        {/* DỊCH VỤ */}
        <Text style={styles.title}>DỊCH VỤ</Text>
        <CategoryMenu />

        {/* ƯU ĐÃI  */}
        <View style={styles.bonusContainer}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name='ticket-percent'
              color={COLORS.info}
              size={14}
            />
          </View>
          <Text style={{ flex: 1, color: COLORS.info }}>
            Bạn đang có 4 mã ưu đãi dịch vụ
          </Text>

          <TouchableOpacity
            // onPress={() => navigation.navigate(ROUTE_NAME.VoucherScreen)}
            style={styles.bonusButton}>
            <Text style={{ paddingHorizontal: 10, color: COLORS.primary }}>
              Sử dụng ngay
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBorder} />
        {/* TIN TỨC */}
        <News />
      </ScrollView>
    </SafeAreaView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
    marginHorizontal: 20
  },
  bonusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundPrimary,
    marginHorizontal: 20,
    marginTop: 10
  },
  bonusButton: {
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: 10
  },
  bottomBorder: {
    borderBottomWidth: 2,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: COLORS.grayMedium
  }
})
