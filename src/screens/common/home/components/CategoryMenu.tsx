import { TruckIcon } from '@assets/index'
import COLORS from '@constants/colors'
import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

const categorys = [
  {
    id: 1,
    name: 'Dịch vụ 1',
    icon: TruckIcon
  },
  {
    id: 2,
    name: 'Dịch vụ 2',
    icon: TruckIcon
  },
  {
    id: 3,
    name: 'Dịch vụ 3',
    icon: TruckIcon
  },
  {
    id: 4,
    name: 'Dịch vụ 4',
    icon: TruckIcon
  },
  {
    id: 5,
    name: 'Dịch vụ 5',
    icon: TruckIcon
  },
  {
    id: 6,
    name: 'Dịch vụ 6',
    icon: TruckIcon
  },
  {
    id: 7,
    name: 'Dịch vụ 7',
    icon: TruckIcon
  },
  {
    id: 8,
    name: 'Dịch vụ 8',
    icon: TruckIcon
  }
]

const CategoryMenu = () => {
  return (
    <View style={styles.container}>
      {categorys.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={{ alignItems: 'center', width: screenWidth / 4 }}>
          <View style={styles.button}>
            <Image
              source={item.icon}
              style={{ width: '60%', height: '60%' }}
              resizeMode='stretch'
            />
          </View>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default CategoryMenu

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 15,
    marginTop: 10
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: COLORS.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  text: {
    width: '50%',
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.info,
    marginTop: 5
  }
})
