import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import useBankSelectBox from 'hooks/useBankSelectBox'
import BottomSheet from './BottomSheet'
import CustomImage from './CustomImage'
import COLORS from '@constants/colors'

type ItemProps = { item: any }

const Item = ({ data }: { data: ItemProps }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={{ uri: data?.item?.logo }}
        style={{ width: 100, height: 50 }}
        resizeMode='stretch'
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{data?.item?.shortName}</Text>
        <Text style={styles.subTitle}>{data?.item?.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const BottomSelectBox = ({ data }) => {
  console.log(data?.[0])
  const onOpen = (callback) => {
    callback()
  }

  const onClose = (callback) => {
    callback()
  }
  return (
    <View style={{ flex: 1 }}>
      <Text>Label</Text>
      <BottomSheet onClose={onClose} onOpen={onOpen}>
        <View
          style={{
            backgroundColor: COLORS.backgroundSecondary,
            paddingVertical: 15
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: '700',
              textAlign: 'center'
            }}>
            Chọn ngân hàng
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={(data) => <Item data={data} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.backgroundPrimary
              }}
            />
          )}
        />
      </BottomSheet>
    </View>
  )
}

export default BottomSelectBox

const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5
  },
  title: {
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 5,
    letterSpacing: 0.5,
    fontWeight: '700'
  },
  subTitle: {
    fontSize: 12,
    color: COLORS.grayMedium
  }
})
