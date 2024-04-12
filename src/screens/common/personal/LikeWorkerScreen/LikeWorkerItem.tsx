import Row from '@components/Row'
import COLORS from '@constants/colors'
import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { LikeWorkerItemType } from '.'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})

type LikeWorkerItemProps = {
  data: LikeWorkerItemType
}
function LikeWorkerItem(props: LikeWorkerItemProps) {
  const star = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item'
    },
    {
      id: '58694a0f-3da1-4asd71f-bd96-145571e29d72',
      title: 'Third Item'
    },
    {
      id: '58694a0f-asd-471f-bd96-145571e29d72',
      title: 'Third Item'
    }
  ]
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          gap: 10
        }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={{ uri: props.data.worker.avatar }}
        />

        <View
          style={{
            gap: 5,
            flex: 1
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: COLORS.info
            }}>
            {props.data.worker.name}
          </Text>
          <Text>Kỹ sư</Text>
          <Text>{props.data.KPI} lịch hẹn mỗi tháng</Text>
          <Row between style={{ flex: 1 }}>
            <FlatList
              horizontal={true}
              data={star}
              renderItem={({ item, index }) => (
                <AntDesign
                  name='star'
                  color={index < props.data.star ? COLORS.warning : '#ccc'}
                  size={18}
                />
              )}
              keyExtractor={(item) => item.id}
            />

            <TouchableOpacity onPress={function (): void {}} style={{}}>
              <Text style={{ color: COLORS.violet2 }}>Đặt lịch ngay</Text>
            </TouchableOpacity>
          </Row>
        </View>

        <AntDesign
          name='heart'
          color={COLORS.error}
          size={18}
          style={{
            position: 'absolute',
            right: 10
          }}
        />
      </View>
    </View>
  )
}

export default LikeWorkerItem
