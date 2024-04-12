import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { ROUTE_NAME } from './routeName'
import ListScreen from '@screens/common/list/ListScreen'
import COLORS from '@constants/colors'
import Row from '@components/Row'
import { Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const Stack = createStackNavigator()

const ListTab = ({ navigation, route }: any) => {
  const { top } = useSafeAreaInsets()
  const header = (
    <Row
      between
      style={{
        backgroundColor: COLORS.backgroundSecondary,
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingTop: top + 5
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: COLORS.white
        }}>
        Danh sách
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          padding: 5,
          borderRadius: 20,
          borderColor: COLORS.white
        }}>
        <Feather name='search' color={COLORS.white} size={20} />
      </TouchableOpacity>
    </Row>
  )
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAME.ListScreen}>
      <Stack.Screen
        name={ROUTE_NAME.ListScreen}
        component={ListScreen}
        options={{
          header: () => header,
          headerStyle: {
            backgroundColor: COLORS.backgroundPrimary
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default ListTab
