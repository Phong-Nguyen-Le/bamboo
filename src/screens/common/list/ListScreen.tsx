import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '@constants/colors'
import moment from 'moment'
import useUserPagination from 'hooks/useUserPagination'
import useUserStore from 'stores/useUserStore'
// import CustomImage from '@components/CustomImage'
import Row from '@components/Row'
import GlobalStyles from '@constants/globalStyles'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import SkeletonComponent from '@components/SkeletonComponent'

const ListScreen = () => {
  //Store để chứa data,action của user => sử dụng ở local
  const { userList, setUserList } = useUserStore()

  //Dùng react query để xử lý API
  const { data, fetchNextPage, isFetching, refetch, isRefetching, isLoading } =
    useUserPagination({
      skip: 0,
      take: 10
    })
  const formatData = data?.pages.flatMap((page) => page) ?? []

  useEffect(() => {
    if (formatData) {
      setUserList(formatData)
    }
  }, [isFetching])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {(isFetching || isRefetching) && <SkeletonComponent />}
      <FlatList
        onRefresh={refetch}
        refreshing={isRefetching}
        data={formatData}
        renderItem={({ item }) => <UserCard item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: '#cccccc'
            }}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        onEndReached={() => {
          fetchNextPage()
        }}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.white,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },
  icon: {
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const UserCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      {/* <CustomImage
        containerStyle={{
          width: 100,
          height: 100
        }}
        style={{ width: '100%', height: '100%', borderRadius: 10 }}
        source={{
          uri: `https://i.pravatar.cc/${100 + item.id}`
        }}
      /> */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginBottom: 5,
            flexDirection: 'row'
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: COLORS.primary,
              flex: 1
            }}>
            {item.name}
          </Text>
        </View>
        <Row style={{ ...GlobalStyles.mbm, columnGap: 10 }}>
          <Feather name='mail' color={COLORS.primary} size={15} />
          <Text style={{ fontSize: 12 }}>{item?.email}</Text>
        </Row>
        <Row style={{ ...GlobalStyles.mbm, columnGap: 10 }}>
          <Feather name='phone-call' color={COLORS.primary} size={15} />
          <Text style={{ fontSize: 12 }}>{item?.phone}</Text>
        </Row>
        <Row style={{ ...GlobalStyles.mbm, columnGap: 10 }}>
          <Entypo name='location' color={COLORS.primary} size={15} />
          <Text
            style={{
              fontSize: 12,
              flex: 1
            }}>
            {`${item.address.suite}, ${item.address.street}, ${item.address.city}`}
          </Text>
        </Row>

        <Text
          style={{
            color: COLORS.black,
            fontSize: 12,
            letterSpacing: 0.5
          }}>
          {moment(new Date()).format('HH:mm - DD/MM/YYYY')}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
