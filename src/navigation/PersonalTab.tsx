import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { ROUTE_NAME } from './routeName'
import ListScreen from '@screens/common/list/ListScreen'
import PersonalScreen from '@screens/common/personal/PersonalScreen'
import UpdateInfo from '@screens/common/personal/UpdateInfo'
import IncomeInfo from '@screens/common/personal/IncomeInfo'
import UpdatePassword from '@screens/common/personal/UpdatePassword'
import COLORS from '@constants/colors'
import LikeWorkerScreen from '@screens/common/personal/LikeWorkerScreen'
import Row from '@components/Row'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Stack = createStackNavigator()
const PersonalTab = ({ navigation, route }: any) => {
  const { top } = useSafeAreaInsets()
  const header = (
    <Row
      center
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
          color: COLORS.white,
          letterSpacing: 0.5
        }}>
        Tài khoản
      </Text>
    </Row>
  )
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAME.PersonalScreen}>
      <Stack.Screen
        name={ROUTE_NAME.PersonalScreen}
        component={PersonalScreen}
        options={{
          header: () => header,
          headerStyle: {
            backgroundColor: COLORS.backgroundSecondary
          }
        }}
      />
      <Stack.Screen
        name={ROUTE_NAME.UpdateInfo}
        component={UpdateInfo}
        options={{
          title: 'Cập nhật thông tin',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: COLORS.white
          },
          headerStyle: {
            backgroundColor: COLORS.backgroundSecondary
          },
          headerTintColor: COLORS.white
        }}
      />

      <Stack.Screen
        name={ROUTE_NAME.UpdatePassword}
        component={UpdatePassword}
        options={{
          title: 'Thay đổi mật khẩu',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: COLORS.white
          },
          headerStyle: {
            backgroundColor: COLORS.backgroundSecondary
          },
          headerTintColor: COLORS.white
        }}
      />
    </Stack.Navigator>
  )
}

export default PersonalTab
